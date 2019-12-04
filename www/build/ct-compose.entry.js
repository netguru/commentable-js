import { r as registerInstance, h } from './core-53db4053.js';
import { T as Tunnel } from './index-0b212045.js';
import { A as ApiBase } from './base-58409c6b.js';

const Comment = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isExpanded = false;
        this.message = '';
    }
    handleMessageChange(event) {
        this.message = event.target.value;
    }
    textareaOnFocus() {
        this.isExpanded = true;
    }
    async addComment(user, setComments, comments) {
        if (this.message.length < 1)
            return;
        const newComment = await ApiBase.addComment(this.apiUrl, this.commentableId, {
            message: this.message,
            authToken: user.auth_token
        });
        setComments([newComment, ...comments]);
    }
    render() {
        return h(Tunnel.Consumer, null, ({ currentUser, comments, setComments }) => (h("div", { class: "ct-compose" }, h("ct-avatar", { user: currentUser }), h("div", { class: "ct-compose__textarea" }, h("textarea", { class: "inner-textarea", onFocus: () => this.textareaOnFocus(), placeholder: "Add a comment...", value: this.message, onInput: (event) => this.handleMessageChange(event) }), this.isExpanded &&
            h("div", { class: "compose-controls" }, h("p", null, "Please click the icon to send"), h("a", { class: "control-send", onClick: () => this.addComment(currentUser, setComments, comments) }, "\u27A1"))))));
    }
    static get style() { return ".ct-compose {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 2rem 1rem;\n}\n\n.ct-compose__textarea {\n  display: block;\n  margin-left: 1rem;\n  max-width: 22rem;\n  width: 100%;\n  background: #0d2031;\n  border-radius: 0.25rem;\n}\n\n.ct-compose__textarea .inner-textarea {\n  display: block;\n  width: 100%;\n  min-height: 1rem;\n  font-size: 0.875rem;\n  padding: 1rem;\n  background-color: transparent;\n  border: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: #FFFFFF;\n  border-radius: 0.25rem;\n  resize: none;\n}\n\n.ct-compose__textarea .inner-textarea:focus {\n  outline: none;\n}\n\n.ct-compose__textarea .inner-textarea::-webkit-input-placeholder {\n  color: #FFFFFF;\n}\n\n.ct-compose__textarea .inner-textarea::-moz-placeholder {\n  color: #FFFFFF;\n}\n\n.ct-compose__textarea .inner-textarea:-ms-input-placeholder {\n  color: #FFFFFF;\n}\n\n.ct-compose__textarea .inner-textarea::-ms-input-placeholder {\n  color: #FFFFFF;\n}\n\n.ct-compose__textarea .inner-textarea::placeholder {\n  color: #FFFFFF;\n}\n\n.ct-compose__textarea .compose-controls {\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1rem;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.compose-controls p {\n  font-size: 0.875rem;\n}\n\n.control-send {\n  cursor: pointer;\n}"; }
};

export { Comment as ct_compose };
