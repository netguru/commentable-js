import { r as registerInstance, h } from './core-7fdcb187.js';
import { T as Tunnel } from './index-d9664074.js';
import { A as ApiBase } from './base-a02438c4.js';

const Commentable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.currentUser = {};
        this.comments = [];
        this.isLoading = true;
        this.parsedConfig = JSON.parse(this.config);
    }
    setCurrentUser(user) {
        this.currentUser = user;
    }
    ;
    setComments(comments) {
        this.comments = comments;
    }
    ;
    async tokenWatchHandler(nextTokenValue) {
        this.isLoading = true;
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
    renderLoading() {
        return h("div", { class: "ct-loading" }, h("div", { class: "la-ball-fall" }, h("div", null), h("div", null), h("div", null)));
    }
    render() {
        const tunnelState = {
            apiUrl: this.apiUrl,
            commentableId: this.commentableId,
            currentUser: this.currentUser,
            comments: this.comments,
            setComments: this.setComments,
            config: this.parsedConfig,
            primaryColor: this.primaryColor
        };
        return h(Tunnel.Provider, { state: tunnelState }, this.isLoading ?
            this.renderLoading()
            :
                h("div", { class: "ct-commentable" }, h("ct-compose", { apiUrl: this.apiUrl, commentableId: this.commentableId }), this.comments.map((comment, _) => (h("ct-comment", { comment: comment })))));
    }
    static get watchers() { return {
        "googleIdToken": ["tokenWatchHandler"],
        "currentUser": ["currentUserWatchHandler"]
    }; }
    static get style() { return "\@import url(\'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap\');\n\n:host {\n  display: block;\n  max-width: 48rem;\n  font-family: \'Open Sans\', sans-serif;\n  background-color: #0A1826;\n  color: #f6f6f6;\n}\n\n.ct-loading {\n  margin: 2rem 4rem;\n}\n\n\n/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <\@DanielCardoso>\n * Licensed under MIT\n */\n.la-ball-fall,\n.la-ball-fall > div {\n  position: relative;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.la-ball-fall {\n  display: block;\n  font-size: 0;\n  color: #fff;\n}\n.la-ball-fall.la-dark {\n  color: #333;\n}\n.la-ball-fall > div {\n  display: inline-block;\n  float: none;\n  background-color: currentColor;\n  border: 0 solid currentColor;\n}\n.la-ball-fall {\n  width: 54px;\n  height: 18px;\n}\n.la-ball-fall > div {\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border-radius: 100%;\n  opacity: 0;\n  -webkit-animation: ball-fall 1s ease-in-out infinite;\n  -moz-animation: ball-fall 1s ease-in-out infinite;\n  -o-animation: ball-fall 1s ease-in-out infinite;\n  animation: ball-fall 1s ease-in-out infinite;\n}\n.la-ball-fall > div:nth-child(1) {\n  -webkit-animation-delay: -200ms;\n  -moz-animation-delay: -200ms;\n  -o-animation-delay: -200ms;\n  animation-delay: -200ms;\n}\n.la-ball-fall > div:nth-child(2) {\n  -webkit-animation-delay: -100ms;\n  -moz-animation-delay: -100ms;\n  -o-animation-delay: -100ms;\n  animation-delay: -100ms;\n}\n.la-ball-fall > div:nth-child(3) {\n  -webkit-animation-delay: 0ms;\n  -moz-animation-delay: 0ms;\n  -o-animation-delay: 0ms;\n  animation-delay: 0ms;\n}\n.la-ball-fall.la-sm {\n  width: 26px;\n  height: 8px;\n}\n.la-ball-fall.la-sm > div {\n  width: 4px;\n  height: 4px;\n  margin: 2px;\n}\n.la-ball-fall.la-2x {\n  width: 108px;\n  height: 36px;\n}\n.la-ball-fall.la-2x > div {\n  width: 20px;\n  height: 20px;\n  margin: 8px;\n}\n.la-ball-fall.la-3x {\n  width: 162px;\n  height: 54px;\n}\n.la-ball-fall.la-3x > div {\n  width: 30px;\n  height: 30px;\n  margin: 12px;\n}\n/*\n * Animation\n */\n\@-webkit-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    transform: translateY(-145%);\n  }\n  10% {\n    opacity: .5;\n  }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: .5;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    transform: translateY(145%);\n  }\n}\n\@-moz-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -moz-transform: translateY(-145%);\n    transform: translateY(-145%);\n  }\n  10% {\n    opacity: .5;\n  }\n  20% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n    -moz-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: .5;\n  }\n  100% {\n    opacity: 0;\n    -moz-transform: translateY(145%);\n    transform: translateY(145%);\n  }\n}\n\@-o-keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%);\n  }\n  10% {\n    opacity: .5;\n  }\n  20% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: .5;\n  }\n  100% {\n    opacity: 0;\n    -o-transform: translateY(145%);\n    transform: translateY(145%);\n  }\n}\n\@keyframes ball-fall {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-145%);\n    -moz-transform: translateY(-145%);\n    -o-transform: translateY(-145%);\n    transform: translateY(-145%);\n  }\n  10% {\n    opacity: .5;\n  }\n  20% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n  80% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    -moz-transform: translateY(0);\n    -o-transform: translateY(0);\n    transform: translateY(0);\n  }\n  90% {\n    opacity: .5;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(145%);\n    -moz-transform: translateY(145%);\n    -o-transform: translateY(145%);\n    transform: translateY(145%);\n  }\n}"; }
};

export { Commentable as ct_commentable };
