import { r as registerInstance, h, H as Host } from './core-53db4053.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, null, h("div", { class: "ct-actions__emoji" }, h("ct-button", { small: true }, "\uD83D\uDC4B 9"), h("ct-button", { small: true }, "\uD83D\uDE31 99+"), h("ct-button", { small: true }, "\uD83D\uDCAA 15"), h("ct-button", { small: true }, "+ Emoji")), h("div", { class: "ct-actions__controls" }, h("a", { class: "action" }, "Reply"), h("span", { class: "separator" }, "\u00B7"), h("a", { class: "action" }, "Share")));
    }
    static get style() { return ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.ct-actions__controls {\n  margin-top: 1rem;\n}\n\n.ct-actions__controls .action,\n.ct-actions__controls .separator {\n  margin-right: 0.5rem;\n}\n\n.ct-actions__controls .action {\n  cursor: pointer;\n}\n\n.ct-actions__emoji {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.ct-actions__emoji ct-button {\n  margin-right: 0.5rem;\n}"; }
};

export { Comment as ct_actions };
