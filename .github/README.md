# sizet-cli

[![npm version](https://img.shields.io/npm/v/sizet-cli.svg)](https://www.npmjs.com/package/sizet-cli)
[![npm downloads](https://img.shields.io/npm/dw/sizet-cli.svg)](https://www.npmjs.com/package/sizet-cli)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/sizet-cli)](https://www.npmjs.com/package/sizet-cli)
[![CodeFactor](https://www.codefactor.io/repository/github/flzyy/sizet-cli/badge)](https://www.codefactor.io/repository/github/flzyy/sizet-cli)

A CLI tool to easily calculate the size of dependencies.

## Usage

### Install -

```sh
npm i -g sizet-cli@latest
```

### Run -

```sh
sizet-cli remote react@latest
```

```sh
sizet-cli remote react@experimental chalk@1.0.0 sizet@latest
```

## Commands

### Local

Calculates the size of a NPM dependency in a local folder.

#### Usage:

```sh
sizet-cli local dist/ dist2/ # ...
```

### Remote

Calculates the size of a NPM dependency hosted on the NPM registry.

#### Usage:

```sh
sizet-cli remote react@latest chalk@latest # ...
```

## Options

### `--verbose`

Enables verbose logging of the steps made by sizet, such as npm pack, install, etc.

**`false` by default**

#### Aliases:

- `-d`

#### Usage:

```sh
sizet-cli remote react@latest -d
```

### `--tempDir`

Changes the prefix for the temporary folder created, only used by [`remote`](#remote)

**`temp` by default**

#### Aliases:

- `-t`

#### Usage:

```sh
sizet-cli remote react@latest -t temp-
```

### `--output`

If true, and a path for a file to output to it will output **JSON** to that file.

**`false` by default**

#### Aliases:

- `-o`

#### Usage:

```sh
sizet-cli local dist/ -o logs/output.json
```
