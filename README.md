# UcwsWebComponentWrapper

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)


The `UcwsWebComponentWrapper` is a custom web component built using [Lit](https://lit.dev/), designed to create a flexible, responsive wrapper with a header, logo, and slot area for custom content like other web components. This components primary use is to provide a wrapper for developing University of Calgary web components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Slots](#slots)
- [Styling](#styling)
- [Example](#example)

## Installation

To use the `UcwsWebComponentWrapper`, ensure that you have installed dependencies and configured your project to work with [Lit](https://lit.dev/).

1. Add the component to your project.
2. Import `UcwsWebComponentWrapper` as shown below.

```javascript
import './path/to/UcwsWebComponentWrapper.js';
```

## Usage

Include the component in your HTML as follows:

```html
<ucws-web-component-wrapper header="Web Component Wrapper">
  <!-- Add custom components (or other content) here -->
</ucws-web-component-wrapper>
```

### Properties

| Property | Type   | Default               | Description                            |
|----------|--------|-----------------------|----------------------------------------|
| `header` | String | `"Web Component Tester"` | The text to display in the component header. |

### Slots

- **Default slot**: Place any additional HTML content (e.g., buttons, text, etc.) or new components being developed within the component's `.component-wrapper` div.

## Styling

The component is styled with the following CSS custom properties and defaults:

- `--ucws-test-background-color`: Sets the background color for the component. Intended to be used to test on various background colors.

Additionally, the following classes are available:

| Class                | Description                                            |
|----------------------|--------------------------------------------------------|
| `.logo`              | Styles the container for the logo.                     |
| `.app-footer`        | Styles the footer text, if added.                      |
| `.component-wrapper` | Contains and spaces out slotted content or components. |

## Example

Here’s an example that changes the header and adds some custom buttons:

```html
<ucws-web-component-wrapper header="Testing buttons">
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Contact Us</button>
</ucws-web-component-wrapper>
```

This will render a wrapper with the specified header text and three buttons inside.

## License

This project is licensed under the MIT License.

---

Developed by Matthew Bauman.
