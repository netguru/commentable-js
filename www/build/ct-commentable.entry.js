import { h, r as registerInstance } from './core-6b4c2274.js';

const createProviderConsumer = (defaultState, consumerRender) => {
    let listeners = new Map();
    let currentState = defaultState;
    const updateListener = (fields, instance) => {
        if (Array.isArray(fields)) {
            [...fields].forEach(fieldName => {
                instance[fieldName] = currentState[fieldName];
            });
        }
        else {
            instance[fields] = Object.assign({}, currentState);
        }
    };
    const subscribe = (instance, propList) => {
        if (!listeners.has(instance)) {
            listeners.set(instance, propList);
            updateListener(propList, instance);
        }
        return () => {
            if (listeners.has(instance)) {
                listeners.delete(instance);
            }
        };
    };
    const Provider = ({ state }, children) => {
        currentState = state;
        listeners.forEach(updateListener);
        return children;
    };
    const Consumer = (props, children) => {
        // The casting on subscribe is to allow for crossover through the stencil compiler
        // In the future we should allow for generics in components.
        return consumerRender(subscribe, children[0]);
    };
    const injectProps = (Cstr, fieldList) => {
        const CstrPrototype = Cstr.prototype;
        const cstrConnectedCallback = CstrPrototype.connectedCallback;
        const cstrDisconnectedCallback = CstrPrototype.disconnectedCallback;
        CstrPrototype.connectedCallback = function () {
            subscribe(this, fieldList);
            if (cstrConnectedCallback) {
                return cstrConnectedCallback.call(this);
            }
        };
        CstrPrototype.disconnectedCallback = function () {
            listeners.delete(this);
            if (cstrDisconnectedCallback) {
                cstrDisconnectedCallback.call(this);
            }
        };
    };
    return {
        Provider,
        Consumer,
        injectProps
    };
};

const Tunnel = createProviderConsumer({
    currentUser: {
        id: null,
        auth_token: null,
        email: null,
        name: null,
        picture_url: null
    },
    comments: []
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

const API_ROUTES = {
    auth: 'auth',
    commentsList: (id) => `/commentable/${id}/comments/list`
};
const ApiBase = {
    async fetch(endpoint, requestConfig) {
        const response = await fetch(endpoint, Object.assign(Object.assign({}, requestConfig), { headers: {
                'Content-Type': 'application/json'
            } }));
        return response.json();
    },
    auth(apiUrl, googleIdToken) {
        if (!googleIdToken)
            return;
        return this.fetch(`${apiUrl}/${API_ROUTES.auth}`, {
            method: 'post',
            body: JSON.stringify({
                id_token: googleIdToken
            })
        });
    },
    fetchComments(apiUrl, commentableId, params) {
        return this.fetch(`${apiUrl}/${API_ROUTES.commentsList(commentableId)}`, {
            method: 'post',
            body: JSON.stringify(params)
        });
    }
};

const Commentable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currentUser = {};
        this.comments = [];
        this.isLoading = true;
        // TODO: implement this: parsedConfig = JSON.parse(this.config);
        this.setCurrentUser = (user) => {
            this.currentUser = user;
        };
        this.setComments = (comments) => {
            this.comments = comments;
        };
    }
    async tokenWatchHandler(nextTokenValue) {
        const user = await ApiBase.auth(this.apiUrl, nextTokenValue);
        this.setCurrentUser(user);
    }
    async currentUserWatchHandler() {
        const requestParams = {};
        if (this.currentUser) {
            requestParams.auth_token = this.currentUser.auth_token;
        }
        const { comments } = await ApiBase.fetchComments(this.apiUrl, this.commentableId, requestParams);
        this.setComments(comments.reverse());
        this.isLoading = false;
    }
    render() {
        const tunnelState = {
            currentUser: this.currentUser,
            comments: this.comments
        };
        return h(Tunnel.Provider, { state: tunnelState }, this.isLoading ?
            h("p", null, "Loading")
            :
                this.comments.map((comment, _) => (h("ct-comment", { comment: comment }))));
    }
    static get watchers() { return {
        "googleIdToken": ["tokenWatchHandler"],
        "currentUser": ["currentUserWatchHandler"]
    }; }
    static get style() { return "\@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap\');\n\n:host {\n  display: block;\n  max-width: 48rem;\n  font-family: \'Open Sans\', sans-serif;\n  background-color: #0A1826;\n  color: #f6f6f6;\n}"; }
};

export { Commentable as ct_commentable };
