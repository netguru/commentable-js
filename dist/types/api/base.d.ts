declare const ApiBase: {
    auth(apiUrl: string, googleIdToken: string): Promise<void>;
};
export default ApiBase;
