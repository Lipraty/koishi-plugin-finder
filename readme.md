# koishi-plugin-finder

[![npm](https://img.shields.io/npm/v/koishi-plugin-finder?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-finder)

Now command, fast `Finder`

## Install

Install the plugin from the koishi market:

- Open your koishi market
- Search `finder`
- Click the install button
- Open your plugin configuration page and enable the plugin

Install the plugin from the terminal:

```bash
yarn add koishi-plugin-finder
```

## Usage

The finder has a simple and easy-to-use UI.

..image

## Configuration

### `unsafe`

- Type: `boolean`
- Default: `false`

Allow blocks registered by other plugins to be used in the finder.

### `maxSteps`

- Type: `number`
- Default: `8`

The maximum number of steps that the finder action block can take.
