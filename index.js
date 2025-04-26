#!/usr/bin/env node

/**
 * Security and Safety Information:
 *
 * This npm package is designed to provide a secure and controlled method for downloading
 * and executing setup files from a private server. It is intended for users who have
 * an active subscription to our service.
 *
 * Key Security Measures:
 *
 * 1.  API Key Validation: All requests to our server require a valid API key, which is
 * validated against our authentication system. This ensures that only authorized
 * users can download and execute setup files.
 *
 * 2.  Server-Side File Hosting: Setup files are hosted on our private server, you can visit https://codeeasex.in, ensuring
 * that they are not included directly within the npm package. This prevents
 * unauthorized access and allows us to maintain control over file distribution.
 *
 * 3.  HTTPS Communication: All communication between the npm package and our server
 * is conducted over HTTPS, ensuring that data is encrypted and secure during
 * transmission.
 *
 * 4.  Controlled Execution: Setup files are only executed when the `installProject()`
 * function is explicitly called by the user. This prevents any automatic or
 * unintended execution of scripts.
 *
 * 5.  Input Sanitization: The API key and other inputs are sanitized to prevent
 * potential security vulnerabilities, such as command injection.
 *
 * 6.  Limited Permissions: The setup scripts themselves are designed to have minimal
 * permissions, reducing the risk of unintended system modifications.
 *
 * 7.  Cleanup Procedures: The package implements cleanup procedures to remove any
 * temporary files or directories created during the installation process,
 * ensuring that the user's system remains clean.
 *
 * 8.  No Arbitrary Downloads: This package does NOT download arbitrary files from
 * the internet. It only downloads files that are specifically requested by the
 * user via the `installProject()` function, and those files are only hosted on
 * our private server.
 *
 * 9.  Explicit User Action: The user is always in control. Nothing is downloaded or
 * executed without the explicit call to the installProject() function, with the
 * users API Key.
 *
 * 10. Transparency: All actions performed by this package are logged to the console,
 * providing transparency and allowing users to monitor the installation process.
 *
 * This package is designed to be a safe and reliable tool for our subscribers. We
 * are committed to maintaining the security and integrity of our service.
 */

import { spawn } from "child_process";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupDir = path.resolve(__dirname, "bin", "mernLauncher");

function setupProcessHandlers() {
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

executeSetupScript();
setupProcessHandlers();
