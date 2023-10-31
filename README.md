# react-native-cartar

React Native wrapper for [cartar.io](https://cartar.io).

## Installation

```
yarn add @ckbab/react-native-cartar
```

This package depends on `react-native-svg` so you need to install it as well.

## Examples

![](https://cartar.io/?hair=6&eye=5&mouth=4&beard=5&shirt=2&skin-color=5&hair-color=7&beard-color=4&shirt-color=44bd32&shirt-color-alt=2f3640&size=200)
![](https://cartar.io/?hair=2&eye=2&mouth=3&beard=2&shirt=6&skin-color=3&hair-color=5&beard-color=4&shirt-color=e84118&shirt-color-alt=fefefe&size=200)
![](https://cartar.io/?hair=9&eye=5&mouth=1&shirt=3&skin-color=7&hair-color=9&shirt-color=0984e3&shirt-color-alt=fefefe&size=200)

## Usage

```js
import Cartar from "@ckbab/react-native-cartar";

<Cartar size={200} beard={2} beardColor={3} skinColor={2} ... />
```

## Properties

| Name            | Type                 | Values   | Default value                                                    |
| --------------- | -------------------- | -------- | ---------------------------------------------------------------- |
| `beard`         | `number`             | `0 - 10` | `0`                                                              |
| `beardColor`    | `number` or `string` | `0-10`   | `0`                                                              |
| `earrings`      | `number`             | `0 - 4`  | `0`                                                              |
| `earringsColor` | `string`             | `0 - 3`  | ![](https://via.placeholder.com/16/4ee2ec/4ee2ec.png) `#4ee2ec`  |
| `eye`           | `number`             | `0 - 13` | `0`                                                              |
| `eyeColor`      | `string`             | -        | ![](https://via.placeholder.com/16/0096ff/0096ff.png) `#0096ffX` |
| `glasses`       | `number`             | `0 - 5`  | `0`                                                              |
| `glassesColor`  | `string`             | -        | ![](https://via.placeholder.com/16/000/000.png) `#000`           |
| `hair`          | `number`             | `0 - 30` | `0`                                                              |
| `hairColor`     | `number` or `string` | `0-10`   | `0`                                                              |
| `hat`           | `number`             | `0 - 7`  | `0`                                                              |
| `hatColor`      | `string`             | -        | ![](https://via.placeholder.com/16/0b6623/0b6623.png) `#0b6623`  |
| `mouth`         | `number`             | `0 - 15` | `0`                                                              |
| `mouthColor`    | `string`             | `0 - 3`  | ![](https://via.placeholder.com/16/ff0000/ff0000.png) `#ff0000`  |
| `necklace`      | `number`             | `0 - 3`  | `0`                                                              |
| `necklaceColor` | `string`             | `0 - 3`  | ![](https://via.placeholder.com/16/ffd700/ffd700.png) `#ffd700`  |
| `shirt`         | `number`             | `0 - 19` | `0`                                                              |
| `shirtColor`    | `string`             | -        | ![](https://via.placeholder.com/16/999/999.png) `#999`           |
| `shirtColorAlt` | `string`             | -        | ![](https://via.placeholder.com/16/666/666.png) `#666`           |
| `skinColor`     | `number` or `string` | `0-8`    | `0`                                                              |
| `size`          | `number`             | -        | `100`                                                            |

Note that `skinColor`, `hairColor` and `beardColor` support both predefined colors (e.g. 3) or custom colors (e.g. `#cc00ff`).

## Default colors

### Skin

| Value | Hex code  | Example                                               |
| ----- | --------- | ----------------------------------------------------- |
| 1     | `#ffdbac` | ![](https://via.placeholder.com/16/ffdbac/ffdbac.png) |
| 2     | `#f1c27d` | ![](https://via.placeholder.com/16/f1c27d/f1c27d.png) |
| 3     | `#e0ac69` | ![](https://via.placeholder.com/16/e0ac69/e0ac69.png) |
| 4     | `#c68642` | ![](https://via.placeholder.com/16/c68642/c68642.png) |
| 5     | `#8d5524` | ![](https://via.placeholder.com/16/8d5524/8d5524.png) |
| 6     | `#83572e` | ![](https://via.placeholder.com/16/83572e/83572e.png) |
| 7     | `#624125` | ![](https://via.placeholder.com/16/624125/624125.png) |
| 8     | `#422d1b` | ![](https://via.placeholder.com/16/422d1b/422d1b.png) |

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

The color is based on the `skinColor` value where 1 is light colored beard and 10 is dark colored beard.
