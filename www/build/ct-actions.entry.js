import { r as registerInstance, h, H as Host } from './core-6b4c2274.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h(Host, null, h("div", { class: "ct-actions__emoji" }, h("ct-button", { small: true }, "+ Emoji")), h("div", { class: "ct-actions__controls" }, h("a", null, "Reply"), h("span", null, "\u00B7"), h("a", null, "Share")));
    }
    static get style() { return ":host {\n  display: block;\n  margin-top: 1rem;\n}"; }
};

export { Comment as ct_actions };
