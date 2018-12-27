import { h, JSXCustomElement } from "jsx-for-web-components";

class TestElement extends JSXCustomElement {
  public render() {
    return <div id="testing">hello</div>;
  }
  public connectedCallback() {
    super.connectedCallback();
  }
}

class WrapperElement extends JSXCustomElement {
  public render() {
    return (
      <main>
        <test-element></test-element>
      </main>
    );
  }
}

window.customElements.define('test-element', TestElement);
window.customElements.define('wrapper-element', WrapperElement);
