import { h } from "@stencil/core";
import ApiBase from "../../api/base";
export class Commentable {
    constructor() {
        this.parsedConfig = JSON.parse(this.config);
    }
    componentWillLoad() {
        ApiBase.auth(this.apiUrl, this.googleIdToken);
    }
    render() {
        return h("div", null,
            h("p", null,
                "Component id: ",
                this.commentableId),
            h("p", null,
                "Component Google ID token: ",
                this.googleIdToken),
            h("p", null,
                "Config: ",
                this.apiUrl));
    }
    static get is() { return "ct-commentable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["commentable.css"]
    }; }
    static get styleUrls() { return {
        "$": ["commentable.css"]
    }; }
    static get properties() { return {
        "commentableId": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "commentable-id",
            "reflect": false
        },
        "googleIdToken": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "google-id-token",
            "reflect": false
        },
        "apiUrl": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "api-url",
            "reflect": false
        },
        "config": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "config",
            "reflect": false
        }
    }; }
}
