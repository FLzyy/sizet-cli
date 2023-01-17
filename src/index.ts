#! /usr/bin/env node
/* eslint-disable @typescript-eslint/no-confusing-void-expression */

import { Command, CommanderError } from "commander";
import * as actions from "sizet";
import { createSpinner } from "nanospinner";

const program = new Command();
let value = "";

// Metadata

program
  .name("sizet-cli")
  .description("A CLI tool to easily calculate the size of dependencies.")
  .version("1.0.0", "-v, --version");

// Arguments

program
  .argument("<value>", "the folder or package name to be calculated")
  .action((val) => {
    value = val;
  });

// Options

program
  .option("-d, --verbose", "enables verbose logging for npm commands ran")
  .option("-t, --temp <prefix>", "prefix for the temporary folder created")
  .option("-o, --output <path>", "path for a file to output json to");

// Error Formatting

program.configureOutput({
  writeErr: (str) => process.stdout.write(`\x1b[31m✘\x1b[0m ${str}`),
});

// Main Code

program.parse();
