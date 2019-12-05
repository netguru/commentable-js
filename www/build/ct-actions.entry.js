import { r as registerInstance, h, H as Host } from './core-7fdcb187.js';
import { T as Tunnel } from './index-d9664074.js';
import { A as ApiBase } from './base-a02438c4.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.reactionsExpanded = false;
        this.replyComposeVisible = false;
    }
    toggleReactionsPanel() {
        this.reactionsExpanded = !this.reactionsExpanded;
    }
    isOwnReaction(reactionType) {
        return this.comment.user_reactions.includes(reactionType);
    }
    mapReactions(config, toggleReactionParams) {
        return config.reactions.map((reaction, _) => {
            const numberOfReactions = this.comment.reactions && this.comment.reactions[reaction.type];
            if (numberOfReactions) {
                return h("ct-button", { small: true, active: this.isOwnReaction(reaction.type), onClick: () => this.toggleReaction(toggleReactionParams.apiUrl, toggleReactionParams.commentableId, {
                        authToken: toggleReactionParams.authToken,
                        reactionType: reaction.type,
                        commentId: this.comment.id
                    }) }, reaction.code, " ", numberOfReactions);
            }
        });
    }
    addReaction(reactionType) {
        this.comment.reactions[reactionType] = (this.comment.reactions[reactionType] || 0) + 1;
        this.comment.user_reactions.push(reactionType);
    }
    removeReaction(reactionType) {
        this.comment.reactions[reactionType] -= 1;
        const userReactions = this.comment.user_reactions;
        this.comment.user_reactions = userReactions.filter(reaction => reaction !== reactionType);
    }
    async toggleReaction(apiUrl, commentableId, { authToken, reactionType, commentId }) {
        if (this.isOwnReaction(reactionType)) {
            try {
                await ApiBase.deleteReaction(apiUrl, commentableId, {
                    authToken,
                    reactionType,
                    commentId
                });
            }
            catch (_a) { }
            this.removeReaction(reactionType);
        }
        else {
            await ApiBase.addReaction(apiUrl, commentableId, {
                authToken,
                reactionType,
                commentId
            });
            this.addReaction(reactionType);
            this.toggleReactionsPanel();
        }
    }
    toggleReply() {
        this.replyComposeVisible = !this.replyComposeVisible;
    }
    render() {
        return h(Tunnel.Consumer, null, ({ apiUrl, commentableId, config, currentUser }) => (h(Host, null, console.log(this.comment), h("div", { class: "ct-actions__emoji" }, this.mapReactions(config, {
            apiUrl,
            commentableId,
            authToken: currentUser.auth_token
        }), h("ct-button", { small: true, onClick: () => this.toggleReactionsPanel() }, "+ Emoji")), this.reactionsExpanded && h("div", { class: "reactions-panel" }, config.reactions.map((reaction, _) => (h("ct-button", { small: true, onClick: () => this.toggleReaction(apiUrl, commentableId, {
                authToken: currentUser.auth_token,
                reactionType: reaction.type,
                commentId: this.comment.id
            }) }, reaction.code)))), h("div", { class: "ct-actions__controls" }, h("a", { class: "action", onClick: () => this.toggleReply() }, "Reply"), h("span", { class: "separator" }, "\u00B7"), h("a", { class: "action" }, "Share")), this.replyComposeVisible && h("div", { class: "ct-actions__reply-compose" }, h("ct-compose", { comment: this.comment })))));
    }
    static get style() { return ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\n.ct-actions__controls {\n  margin-top: 1rem;\n}\n\n.ct-actions__controls .action,\n.ct-actions__controls .separator {\n  margin-right: 0.5rem;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.ct-actions__controls .action {\n  cursor: pointer;\n}\n\n.ct-actions__emoji {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.ct-actions__emoji ct-button,\n.reactions-panel ct-button {\n  margin-right: 0.5rem;\n}"; }
};

export { Comment as ct_actions };
