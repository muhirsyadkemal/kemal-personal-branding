import { copyFileSync, existsSync, mkdirSync } from "node:fs";

if (!existsSync("dist/server/index.js")) {
  throw new Error("vinext server entrypoint was not created.");
}

mkdirSync("dist/.openai", { recursive: true });
copyFileSync(".openai/hosting.json", "dist/.openai/hosting.json");

console.log("Sites hosting metadata copied to dist.");
