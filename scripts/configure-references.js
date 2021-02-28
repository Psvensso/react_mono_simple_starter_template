#!/usr/bin/env node

// @ts-check
/* eslint-disable */

const fs = require("fs");
const util = require("util");
let exec = util.promisify(require("child_process").exec);
const path = require("path");
const isCI = require("is-ci");
let config = null;

try {
  config = JSON.parse(fs.readFileSync("tsconfig.json").toString());
} catch (e) {
  console.error(e);
}
config.files = [];
config.references = [];

(async function () {
  if (isCI) {
    // dont run it on CI
    return;
  }

  const { stdout, stderr } = await exec("yarn workspaces info --json");

  const lines = stdout.split("\n");
  const depthTree = lines.slice(1, lines.length - 2).join("\n");
  let workspaces = null;
  console.log(depthTree);
  try {
    workspaces = JSON.parse(depthTree);
  } catch (e) {
    console.error(e);
  }

  for (const name in workspaces) {
    const workspace = workspaces[name];
    const location = path.resolve(process.cwd(), workspace.location);
    const tsconfigPath = path.resolve(location, "tsconfig.json");
    if (fs.existsSync(tsconfigPath)) {
      config.references.push({
        path: workspace.location,
      });
      try {
        const workspaceConfig = JSON.parse(
          fs.readFileSync(tsconfigPath).toString()
        );
        workspaceConfig.compilerOptions.composite = true;
        workspaceConfig.references = [];

        for (const dependency of workspace.workspaceDependencies) {
          const dependecyLocation = path.resolve(
            process.cwd(),
            workspaces[dependency].location
          );
          if (fs.existsSync(path.resolve(dependecyLocation, "tsconfig.json"))) {
            console.log(path.relative(location, dependecyLocation));
            workspaceConfig.references.push({
              path: path
                .relative(location, dependecyLocation)
                .replace(/\\/g, "/"),
            });
          }
        }
        fs.writeFileSync(
          tsconfigPath,
          JSON.stringify(workspaceConfig, undefined, 4)
        );
      } catch (e) {
        console.log(tsconfigPath);
        console.error(e);
      }
    }
  }
  fs.writeFileSync("tsconfig.json", JSON.stringify(config, undefined, 4));
})();
