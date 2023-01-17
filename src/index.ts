#! /usr/bin/env node
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { program, Argument } from "commander";
import * as actions from "sizet";
import { writeFileSync } from "fs";

let command = "";
let value: string[] = [];

// Metadata

program
  .name("sizet-cli")
  .description("A CLI tool to easily calculate the size of dependencies.")
  .version("1.0.0", "-v, --version");

// Arguments

program
  .addArgument(
    new Argument(
      "<command>",
      "the command used to calculate a package"
    ).choices(["remote", "local"])
  )
  .argument("<value...>", "the folder or package name to be calculated")
  .action((cmd, val) => {
    command = cmd;
    value = val;
  });

// Options

program
  .option("-d, --verbose", "enables verbose logging for npm commands ran")
  .option("-t, --tempDir <prefix>", "prefix for the temporary folder created")
  .option("-o, --output <path>", "path for a file to output json to");

// Error Formatting

program.configureOutput({
  writeErr: (str) => process.stderr.write(`\x1b[31m✘\x1b[0m ${str}`),
});

// Main Code

program.parse();

console.clear();
try {
  const final: Record<string, { tarGzipped: number; unpacked: number }> = {};
  const run = actions[command];
  const opts = program.opts();

  const length = value.length;
  for (let i = 0; i < length; i++) {
    final[value[i]] = run(value[i], {
      tempDir: opts.tempDir,
      verbose: opts.verbose,
    });

    console.log(`\x1b[1;34m${value[i]}:\x1b[0m
  ● Tarred and Gzipped: ${final[value[i]].tarGzipped / 1000}kb
  ● Unpacked: ${final[value[i]].unpacked / 1000}kb\n`);
  }

  if (opts.output) {
    writeFileSync(opts.output, JSON.stringify(final, null, "\t"));
  }
} catch (error) {
  console.error(`\x1b[31m✘\x1b[0m ${error}`);
}
