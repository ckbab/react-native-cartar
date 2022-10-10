# react-native-cartar

React Native wrapper for [cartar.io](https://cartar.io).

## Installation

```
yarn add @ckbab/react-native-cartar
```

## Usage

```js
import Cartar from "@ckbab/react-native-cartar";

<Cartar size={200} beard={2} beardColor={3} skinColor={2} ... />

// Or if you want to use custom image component.

import { useCartar } from "@ckbab/react-native-cartar";

const { get } = useCartar();

const url = get({ size: 200, beard: 2, beardColor: 3, skinColor: 2, ... });

<CustomImage url={url} />
```

## Properties

| Name            | Type                 | Values     | Default value                                                  |
| --------------- | -------------------- | ---------- | -------------------------------------------------------------- |
| `size`          | `number`             | `0 - 1200` | `400`                                                          |
| `hair`          | `number`             | `0 - 21`   | `0` (bald)                                                     |
| `eye`           | `number`             | `1 - 10`   | `0`                                                            |
| `mouth`         | `number`             | `1 - 10`   | `0`                                                            |
| `beard`         | `number`             | `1 - 10`   | `0`                                                            |
| `shirt`         | `number`             | `1 - 12`   | `1`                                                            |
| `shirtColor`    | `string`             | -          | ![](https://via.placeholder.com/16/0984e3/0984e3.png) `0984e3` |
| `shirtColorAlt` | `string`             | -          | ![](https://via.placeholder.com/16/fefefe/fefefe.png) `fefefe` |
| `skinColor`     | `number` or `string` | `1-8`      | `1`                                                            |
| `hairColor`     | `number` or `string` | `1-10`     | `1`                                                            |
| `beardColor`    | `number` or `string` | `1-7`      | `1`                                                            |

- `skinColor`, `hairColor` and `beardColor` supports both predefined colors (e.g. 3) or custom colors (e.g. `003300`).
- All colors are written without the hexadecimal (#) for a cleaner URL.

## Default colors

### Skin

| Value | Hex code  | Example                                               |
| ----- | --------- | ----------------------------------------------------- |
| 1     | `#fefefe` | ![](https://via.placeholder.com/16/fefefe/fefefe.png) |
| 2     | `#ffdbac` | ![](https://via.placeholder.com/16/ffdbac/ffdbac.png) |
| 3     | `#f1c27d` | ![](https://via.placeholder.com/16/f1c27d/f1c27d.png) |
| 4     | `#e0ac69` | ![](https://via.placeholder.com/16/e0ac69/e0ac69.png) |
| 5     | `#c68642` | ![](https://via.placeholder.com/16/c68642/c68642.png) |
| 6     | `#8d5524` | ![](https://via.placeholder.com/16/8d5524/8d5524.png) |
| 7     | `#83572e` | ![](https://via.placeholder.com/16/83572e/83572e.png) |
| 8     | `#624125` | ![](https://via.placeholder.com/16/624125/624125.png) |
| 9     | `#422d1b` | ![](https://via.placeholder.com/16/422d1b/422d1b.png) |

### Hair

| Value | Hex code  | Example                                               |
| ----- | --------- | ----------------------------------------------------- |
| 1     | `#f2e7c7` | ![](https://via.placeholder.com/16/f2e7c7/f2e7c7.png) |
| 2     | `#f2e1ae` | ![](https://via.placeholder.com/16/f2e1ae/f2e1ae.png) |
| 3     | `#f2da91` | ![](https://via.placeholder.com/16/f2da91/f2da91.png) |
| 4     | `#debe99` | ![](https://via.placeholder.com/16/debe99/debe99.png) |
| 5     | `#aa8866` | ![](https://via.placeholder.com/16/aa8866/aa8866.png) |
| 6     | `#6d4730` | ![](https://via.placeholder.com/16/6d4730/6d4730.png) |
| 7     | `#4d2d1a` | ![](https://via.placeholder.com/16/4d2d1a/4d2d1a.png) |
| 8     | `#2d170e` | ![](https://via.placeholder.com/16/2d170e/2d170e.png) |
| 9     | `#121821` | ![](https://via.placeholder.com/16/121821/121821.png) |
| 10    | `#b06500` | ![](https://via.placeholder.com/16/b06500/b06500.png) |

### Beard

The color is based on the `skinColor` value where 1 is light colored beard and 7 is dark colored beard.
