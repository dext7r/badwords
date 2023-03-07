# @h7ml/badwords

[![NPM version](https://img.shields.io/npm/v/@h7ml/badwords?color=a1b858&label=)](https://www.npmjs.com/package/@h7ml/badwords)
[![License](https://img.shields.io/github/license/h7ml/badwords?color=2b7489)](https://github.com/h7ml/badwords/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/h7ml/badwords?style=social)](https://github.com/h7ml/badwords/)
[![GitHub forks](https://img.shields.io/github/forks/h7ml/badwords?style=social)](https://github.com/h7ml/badwords/fork)
[![GitHub watchers](https://img.shields.io/github/watchers/h7ml/badwords?style=social)](https://github.com/h7ml/badwords)

# Install

## npm

```bash 
npm install @h7ml/badwords
```

## yarn

```bash
yarn add @h7ml/badwords
```

## pnpm

```bash
pnpm add @h7ml/badwords
```

# usage

## import

```js
import {badwords, checkWord} from '@h7ml/badwords'
```

## check

```js
checkWord('天府广场', badwords) // true
checkWord('广场') // false
```

## API

### checkWord(text, words)

| parameter | type        | default    | require | description               |
|-----------|-------------|------------|---------|---------------------------|
| `text`    | `string`    | `_`        | `true`  | To check the text         |
| `words`   | `string[]`	 | `badwords` | `false` | Sensitive vocabulary list |

# License

[MIT](./LICENSE) License © 2022 [Anthony Fu](https://github.com/h7ml)
