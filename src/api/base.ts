const API_ROUTES = {
  auth: 'auth'
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
  }
};

export default ApiBase
