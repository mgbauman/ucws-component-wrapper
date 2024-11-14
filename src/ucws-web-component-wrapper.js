import { LitElement, html, css } from 'lit';

const ucLogo = new URL('../assets/UC-vert-rgb.svg', import.meta.url).href;

class UcwsWebComponentWrapper extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      margin: 0 auto;
      font-family: sans-serif;
      text-align: center;
      background-color: var(--ucws-test-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }

    .component-wrapper slot {
      display: flex;
      gap: 30px;
      color: #3d3d3d;
      border-color: #3d3d3d;
    }
  `;

  constructor() {
    super();
    this.header = 'Web Component Tester';
  }

  render() {
    return html`


      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
        <meta name="Description" content="Put your description here.">
        <base href="/">
        <title>UCWS Component Wrapper</title>
      </head>

      <body>
        <main>
          <div class="logo"><img alt="open-wc logo" src=${ucLogo}/></div>
          <h1>${this.header}</h1>

          <div class="component-wrapper">
            <slot></slot>
          </div>

        </main>
      </body>
    `;
  }
}

customElements.define('ucws-web-component-wrapper', UcwsWebComponentWrapper);
