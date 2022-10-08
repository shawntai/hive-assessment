# Hive Assessment

This is a Dropdown component that supports both single and multiple selections.

## Start-up

In order to start up the app, run `npm start` in the project root directory, then open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available APIs
### options

To speficy the options/items available for the Dropdown menu, pass in an `options` object parameter to the component, like so:
```
const options = [
  { label: "United States", value: "United States" },
  { label: "Canada", value: "Canada" }
]
<Dropdown options={options}>
```
The `options` variable should be an array of objects with the attributes `label` and `value`.

### mode

The `Dropdown` component also supports two modes, that is `single` and `multiple`. Specify the mode to use by passing in the corresponding string.
```
<Dropdown options={options} mode="single" />
<Dropdown options={options} mode="multiple" />
```