# word-count

A small, dependency-free command-line tool that counts lines, words and characters in a text file and shows its most frequent words.

![Node.js](https://img.shields.io/badge/Node.js-%3E%3D14-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

## Overview

`word-count` reads a text file and prints basic statistics, similar to the Unix `wc` command, plus a top-5 list of the most common words. It is a single script that uses only Node.js built-in modules.

## Features

- Counts lines, words and characters
- Lists the 5 most frequent words (case-insensitive)
- Treats apostrophes as part of words, so "don't" counts as one word
- Includes a `sample.txt` so you can try it immediately
- Zero dependencies

## Requirements

- [Node.js](https://nodejs.org/) 14 or newer (check with `node --version`)

## Installation

```bash
git clone https://github.com/Supreetgg/word-count.git
cd word-count
```

There is nothing to install.

## Usage

```bash
node wc.js <file>
```

Or through npm: `npm start -- <file>`.

### Example

```text
$ node wc.js sample.txt
Lines:      3
Words:      20
Characters: 93
Top words:
  the: 4
  fox: 2
  dog: 2
  did: 2
  not: 2
```

### What the numbers mean

| Output | Meaning |
|---|---|
| Lines | Number of lines, counted by splitting on newline characters (a trailing newline adds one empty final line) |
| Words | Runs of letters, digits and apostrophes, ignoring case |
| Characters | Total characters in the file, including spaces and newlines |
| Top words | The 5 most frequent words, highest first; ties keep the order they first appear |

### Errors

If you give no file, or the file does not exist, the program prints a usage message and exits with code 1.

## Project structure

```text
word-count/
├── wc.js          # the whole program
├── sample.txt     # example input
├── package.json   # project metadata and npm scripts
├── .gitignore
├── LICENSE        # MIT license
└── README.md
```

## Troubleshooting

- **`node` is not recognized**: install Node.js and reopen your terminal.
- **"Usage: node wc.js <file>"**: the path is missing or wrong. Use a path relative to where you run the command, such as `node wc.js sample.txt`.
- **Word counts look off for non-English text**: words are matched with `a-z`, `0-9` and apostrophes, so accented letters and non-Latin scripts are not counted as word characters.

## License

Released under the [MIT License](LICENSE).
