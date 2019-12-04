import { r as registerInstance, h } from './core-53db4053.js';
import { b as cn } from './index-0ede7a69.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.small = false;
    }
    render() {
        return h("div", { class: cn('ct-button', {
                'ct-button--small': this.small
            }) }, h("slot", null));
    }
    static get style() { return ".ct-button {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 1rem 1.75rem;\n  background-color: #0d2031;\n  margin-top: 1rem;\n  color: #00d664;\n  font-size: 0.875rem;\n  cursor: pointer;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  border-radius: 0.25rem;\n}\n\n.ct-button--small {\n  padding: 0.375rem 0.5rem;\n  color: #cccccc;\n  min-height: 1.5rem;\n}"; }
};

export { Comment as ct_button };
