import { r as registerInstance, h, d as getAssetPath } from './core-91da8f92.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("div", { class: "ct-comment__avatar" }, this.user ?
            h("img", { src: this.user.picture_url, alt: `${this.user.name}'s Avatar` })
            :
                h("img", { src: getAssetPath('./assets/fallback.jpg'), alt: "No avatar" }));
    }
    static get assetsDirs() { return ["assets"]; }
    static get style() { return ":host {\n  width: 4rem;\n  height: 4rem;\n}\n\n:host img {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}"; }
};

export { Comment as ct_avatar };
