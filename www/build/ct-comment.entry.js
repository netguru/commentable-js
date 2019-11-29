import { r as registerInstance, h } from './core-933c991d.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", null, "Comment here");
    }
    static get style() { return ""; }
};

export { Comment as ct_comment };
