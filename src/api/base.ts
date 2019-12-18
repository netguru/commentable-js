const API_ROUTES = {
  auth: 'auth',
  commentsList: (id: string) => `commentable/${id}/comments/list`,
  commentsAdd: (id: string) => `commentable/${id}/comments/add`,
  commentsDelete: (id: string) => `commentable/${id}/comments/delete`,
  reactionsAdd: (id: string) => `commentable/${id}/reactions/add`,
  reactionsDelete: (id: string) => `commentable/${id}/reactions/delete`
};

const ApiBase = {
  async fetch(endpoint: string, requestConfig?: any) {
    const response = await fetch(endpoint, {
      ...requestConfig,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json()
  },

  auth(apiUrl: string, googleIdToken: string) {
    if (!googleIdToken) return;
    return this.fetch(`${apiUrl}/${API_ROUTES.auth}`, {
      method: 'post',
      body: JSON.stringify({
        id_token: googleIdToken
      })
    })
  },

  fetchComments(apiUrl: string, commentableId: string, params: any) {
    return this.fetch(`${apiUrl}/${API_ROUTES.commentsList(commentableId)}`, {
      method: 'post',
      body: JSON.stringify(params)
    })
  },

  addComment(apiUrl: string, commentableId: string, { authToken, message, repliesTo }) {
    return this.fetch(`${apiUrl}/${API_ROUTES.commentsAdd(commentableId)}`, {
      method: 'post',
      body: JSON.stringify({
        auth_token: authToken,
        body: message,
        replies_to: repliesTo
      })
    })
  },

  deleteComment(apiUrl: string, commentableId: string, commentId: string, { authToken }) {
    return this.fetch(`${apiUrl}/${API_ROUTES.commentsDelete(commentableId)}`, {
      method: 'post',
      body: JSON.stringify({
        auth_token: authToken,
        comment_id: commentId,
      })
    })
  },

  addReaction(
    apiUrl: string,
    commentableId: string,
    {
      authToken,
      reactionType,
      commentId
    }
  ) {
    return this.fetch(`${apiUrl}/${API_ROUTES.reactionsAdd(commentableId)}`, {
      method: 'post',
      body: JSON.stringify({
        auth_token: authToken,
        reaction_type: reactionType,
        comment_id: commentId
      })
    })
  },

  deleteReaction(
    apiUrl: string,
    commentableId,
    {
      authToken,
      reactionType,
      commentId
    }
  ) {
    return this.fetch(`${apiUrl}/${API_ROUTES.reactionsDelete(commentableId)}`, {
      method: 'post',
      body: JSON.stringify({
        auth_token: authToken,
        reaction_type: reactionType,
        comment_id: commentId
      })
    })
  }
};

export default ApiBase
