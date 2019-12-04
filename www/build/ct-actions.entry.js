import { r as registerInstance, h, H as Host } from './core-53db4053.js';
import { T as Tunnel } from './index-0b212045.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    mapReactions(config) {
        return config.reactions.map((reaction, _) => {
            const numberOfReactions = this.comment.reactions && this.comment.reactions[reaction.type];
            if (numberOfReactions) {
                return h("ct-button", { small: true }, reaction.code, " ", numberOfReactions);
            }
        });
    }
    render() {
        return h(Tunnel.Consumer, null, ({ config }) => (h(Host, null, h("div", { class: "ct-actions__emoji" }, this.mapReactions(config), h("ct-button", { small: true }, "+ Emoji")), h("div", { class: "ct-actions__controls" }, h("a", { class: "action" }, "Reply"), h("span", { class: "separator" }, "\u00B7"), h("a", { class: "action" }, "Share")))));
    }
    static get style() { return ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.ct-actions__controls {\n  margin-top: 1rem;\n}\n\n.ct-actions__controls .action,\n.ct-actions__controls .separator {\n  margin-right: 0.5rem;\n}\n\n.ct-actions__controls .action {\n  cursor: pointer;\n}\n\n.ct-actions__emoji {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.ct-actions__emoji ct-button {\n  margin-right: 0.5rem;\n}"; }
};

export { Comment as ct_actions };
