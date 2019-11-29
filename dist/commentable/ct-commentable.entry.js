import { r as registerInstance, h } from './core-933c991d.js';

const API_ROUTES = {
    auth: 'auth'
};
const ApiBase = {
    async auth(apiUrl, googleIdToken) {
        if (!googleIdToken)
            return;
        await fetch(`${apiUrl}/${API_ROUTES.auth}`, {
            method: 'post',
            body: JSON.stringify({
                id_token: googleIdToken
            })
        });
    }
};

const Commentable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.parsedConfig = JSON.parse(this.config);
    }
    componentWillLoad() {
        ApiBase.auth(this.apiUrl, this.googleIdToken);
    }
    render() {
        return h("div", null, h("p", null, "Component id: ", this.commentableId), h("p", null, "Component Google ID token: ", this.googleIdToken), h("p", null, "Config: ", this.apiUrl));
    }
    static get style() { return ""; }
};

export { Commentable as ct_commentable };
