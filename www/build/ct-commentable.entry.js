import { h, r as registerInstance } from './core-52e4c7ed.js';

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
    }
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

const API_ROUTES = {
    auth: 'auth'
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
    }
};

const Commentable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currentUser = {};
        // TODO: implement this: parsedConfig = JSON.parse(this.config);
        this.setCurrentUser = (user) => {
            this.currentUser = user;
        };
    }
    async tokenWatchHandler(nextTokenValue) {
        const user = await ApiBase.auth(this.apiUrl, nextTokenValue);
        this.setCurrentUser(user);
    }
    render() {
        const tunnelState = {
            currentUser: this.currentUser
        };
        return h(Tunnel.Provider, { state: tunnelState }, h("p", null, "Component id: ", this.commentableId), h("p", null, "Component Google ID token: ", this.googleIdToken), h("p", null, "Config: ", this.apiUrl));
    }
    static get watchers() { return {
        "googleIdToken": ["tokenWatchHandler"]
    }; }
    static get style() { return ""; }
};

export { Commentable as ct_commentable };
