import { r as registerInstance, h, d as getAssetPath } from './core-53db4053.js';
import { c as cn } from './index-32027350.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.nested = false;
    }
    render() {
        return h("div", { class: cn('ct-comment__avatar', {
                'ct-comment__avatar--nested': this.nested
            }) }, this.user ?
            h("img", { src: this.user.picture_url, alt: `${this.user.name}'s Avatar` })
            :
                h("img", { src: getAssetPath('./assets/fallback.jpg'), alt: "No avatar" }));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ":host {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n\n:host img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n\n.ct-comment__avatar--nested {\n  width: 2.5rem;\n  height: 2.5rem;\n}"; }
};

export { Comment as ct_avatar };
