const API_ROUTES = {
    auth: 'auth',
    commentsList: (id) => `commentable/${id}/comments/list`,
    commentsAdd: (id) => `commentable/${id}/comments/add`,
    reactionsAdd: (id) => `commentable/${id}/reactions/add`,
    reactionsDelete: (id) => `commentable/${id}/reactions/delete`
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
    addComment(apiUrl, commentableId, { authToken, message, repliesTo }) {
        return this.fetch(`${apiUrl}/${API_ROUTES.commentsAdd(commentableId)}`, {
            method: 'post',
            body: JSON.stringify({
                auth_token: authToken,
                body: message,
                replies_to: repliesTo
            })
        });
    },
    addReaction(apiUrl, commentableId, { authToken, reactionType, commentId }) {
        return this.fetch(`${apiUrl}/${API_ROUTES.reactionsAdd(commentableId)}`, {
            method: 'post',
            body: JSON.stringify({
                auth_token: authToken,
                reaction_type: reactionType,
                comment_id: commentId
            })
        });
    },
    deleteReaction(apiUrl, commentableId, { authToken, reactionType, commentId }) {
        return this.fetch(`${apiUrl}/${API_ROUTES.reactionsDelete(commentableId)}`, {
            method: 'post',
            body: JSON.stringify({
                auth_token: authToken,
                reaction_type: reactionType,
                comment_id: commentId
            })
        });
    }
};

export { ApiBase as A };
