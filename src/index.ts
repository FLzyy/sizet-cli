import { Command } from "commander";
import { remote, local } from "sizet";
import { createSpinner } from "nanospinner";

const program = new Command();

// Metadata

program
  .name("sizet-cli")
  .description("A CLI tool to easily calculate the size of dependencies.")
  .version("1.0.0", "-v, --version");

// Commands

program
  .command("remote <name>", "calculate the size of npm package")
  .command("local <src>", "calculate the size of a folder with package.json");

// Options

program
  .option("-d, --verbose", "enables verbose logging for npm commands ran")
  .option("-t, --temp <prefix>", "prefix for the temporary folder created")
  .option("-o, --output <path>", "path for a file to output json to");

program.parse();
