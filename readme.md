# koishi-plugin-finder

[![npm](https://img.shields.io/npm/v/koishi-plugin-finder?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-finder)

Now command, fast `Finder`

## Install

Install the plugin from market in the koishi-(desktop/android/docker):

- Open your koishi market
- Search `finder`
- Click the install button
- Open your plugin configuration page and enable the plugin

Install the plugin from the boilerplate workspace:

```bash
yarn add koishi-plugin-finder
```

## API

### Class: `Finder`

Access via `ctx.finder`.

#### `finder.registerAction(name, action)`

- `name` string: The name of the action.
- `action` function: The action to be registered.

Register a new action for the Finder.

## Configuration

### `unsafe`

- Type: `boolean`
- Default: `false`

Allow blocks registered by other plugins to be used in the finder.

### `maxSteps`

- Type: `number`
- Default: `8`

The maximum number of steps that the finder action block can take.

## License

This project is licensed under the [AGPL-3.0](./LICENSE) license.
