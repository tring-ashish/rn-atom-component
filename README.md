# rn-atom-component

It helps to build UI elements with less effort

## Installation

```sh
npm install rn-atom-component
```

<br />

## Usage Guide

## Spinner

```javascript
import { Spinner } from 'rn-atom-component';

return (
   <View style={style.spinner}>
      <Spinner />
    </View>
)
```

## DashedLine

```javascript
import { DashedLine } from 'rn-atom-component';

return (
  <View style={{ padding: 20, height: '100%' }}>
    <DashedLine dashLength={5} />
  </View>
);
```


<br/>

## API Reference

## Spinner

### Size
size of the spinner, Can be either `large` or `small`. Default to `large`.

| type            | default  | required |
| ----------------| -------- | -------- |
| SpinnerSizeType | large    | NO       |


### Color
Color of the spinner, Default to default spinner color.

| type   | default         | required |
| -------| ----------------| -------- |
| String | System Default  |   NO     |


### Container Style
Container Style of the spinner view, Default to center of the parent view.

| type      | default      | required |
| ----------| -------------| -------- |
| ViewStyle |  ViewStyle   |   NO     |





## Dashed Line

### `axis`

Axis of the line, can be either `horizontal` or `vertical`. Defaults to `horionztal`.

| type   | default    | required |
| ------ | ---------- | -------- |
| string | horizontal | NO       |

### `dashGap`

Length of the gap in pixels between each dash, defaults to `2`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 2       | NO       |

### `dashLength`

Length of each dash stroke in pixels, defaults to `4`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 4       | NO       |

### `dashThickness`

Defines the thickness of each dash stroke in pixels, defaults to `2`.

| type   | default | required |
| ------ | ------- | -------- |
| number | 2       | NO       |

### `dashColor`

Defines the color of the dashed line, defaults to Black `#000`. Any valid React Native colour can be provided.

| type   | default | required |
| ------ | ------- | -------- |
| string | #000    | NO       |

### `dashStyle`

Allows for custom View styles to be passed to each dash.

| type            | required |
| --------------- | -------- |
| Object \| Array | NO       |

### `style`

Allows for custom View styles to be passed to each dashed line container.

| type            | required |
| --------------- | -------- |
| Object \| Array | NO       |

<br/>
