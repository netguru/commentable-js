const API_ROUTES = {
  auth: 'auth',
  commentsList: (id: string) => `commentable/${id}/comments/list`,
  commentsAdd: (id: string) => `commentable/${id}/comments/add`
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

  addComment(apiUrl: string, commentableId: string, { authToken, message }) {
    return this.fetch(`${apiUrl}/${API_ROUTES.commentsAdd(commentableId)}`, {
      method: 'post',
      body: JSON.stringify({
        auth_token: authToken,
        body: message
      })
    })
  }
};

export default ApiBase
