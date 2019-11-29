import { h } from "@stencil/core";
export class Comment {
    render() {
        return h("div", null, "Comment here");
    }
    static get is() { return "ct-comment"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["comment.css"]
    }; }
    static get styleUrls() { return {
        "$": ["comment.css"]
    }; }
}
