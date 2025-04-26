import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import os from "os";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageDir = path.resolve(__dirname);
const setupDir = path.join(packageDir, "bin", "mernLauncher");

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

export async function executeSetupScript() {
  console.log(`
        ======================================
        🚀 Welcome to the MERN Starter Kit! 
        Follow the prompts to configure your project.
        ======================================
        `);

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
