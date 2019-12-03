import { r as registerInstance, h, H as Host } from './core-6b4c2274.js';
import { c as cn } from './index-32027350.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.small = false;
    }
    render() {
        return h(Host, { class: cn('ct-button', {
                'ct-button--small': this.small
            }) }, h("slot", null));
    }
    static get style() { return ":host {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 1rem 1.75rem;\n  background-color: #0d2031;\n  margin-top: 1rem;\n  color: #00d664;\n  font-size: 0.875rem;\n  cursor: pointer;\n}\n\n:host.ct-button--small {\n  padding: 0;\n}"; }
};

export { Comment as ct_button };
