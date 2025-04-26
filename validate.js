// index.js
import fs from "fs";
import path from "path";
import os from "os";
import { spawn } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupDir = path.resolve(__dirname, "bin", "mernLauncher");

async function executeSetupScript() {
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
  const fullPath = path.resolve(scriptPath);

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

export async function installProject() {
  try {
    await executeSetupScript();
    console.log("Project installation complete!");
  } catch (error) {
    console.error("Project installation failed:", error.message);
    process.exit(1);
  }
}

export function setupProcessHandlers() {
  process.on("exit", () => console.log("Exiting process."));
  process.on("SIGINT", () => {
    console.log("\n⚠️ Process interrupted.");
    process.exit(1);
  });
  process.on("uncaughtException", (err) => {
    console.error("🚨 Uncaught Exception:", err);
    process.exit(1);
  });
}
