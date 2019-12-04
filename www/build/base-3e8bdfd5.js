import { h } from './core-53db4053.js';

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
    commentsList: (id) => `/commentable/${id}/comments/list`,
    commentsAdd: (id) => `/commentable/${id}/comments/add`
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
    },
    addComment(apiUrl, commentableId, { authToken, message }) {
        return this.fetch(`${apiUrl}/${API_ROUTES.commentsAdd(commentableId)}`, {
            method: 'post',
            body: JSON.stringify({
                auth_token: authToken,
                message
            })
        });
    }
};

export { ApiBase as A, Tunnel as T };
