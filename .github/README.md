# sizet-cli

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

## Commands

### Local

Calculates the size of a NPM dependency in a local folder.

#### Usage:

```sh
sizet-cli local dist/
```

### Remote

Calculates the size of a NPM dependency hosted on the NPM registry.

#### Usage:

```sh
sizet-cli remote react@latest
```

## Options

### `--verbose`

Enables verbose logging of the steps made by sizet, such as npm pack, install, etc.

**`false` by default**

#### Aliases:

- `-v`
- `-d`
- `--debug`

#### Usage:

```sh
sizet-cli remote react@latest -v
```

### `--temp-prefix`

Changes the prefix for the temporary folder created, only used by [`remote`](#remote)

**`temp` by default**

#### Aliases:

- `--temp`
- `--prefix`
- `-t`
- `-p`

#### Usage:

```sh
sizet-cli remote react@latest -t temp-
```

### `--output`

If true, and a path for a file to output to it will output **JSON** to that file.

**`false` by default**

#### Aliases:

- `-o`
- `--out`

#### Usage:

```sh
sizet-cli local dist/ -o logs/output.json
```
