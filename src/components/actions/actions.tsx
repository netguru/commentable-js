import {Component, h, Host, Prop, State} from "@stencil/core";
import Tunnel from '../../data';
import ApiBase from '../../api/base';

@Component({
  tag: 'ct-actions',
  styleUrl: 'actions.css',
  shadow: true
})
export class Comment {
  @Prop() comment: any;
  @State() reactionsExpanded: boolean = false;
  @State() replyComposeVisible: boolean = false;

  toggleReactionsPanel() {
    this.reactionsExpanded = !this.reactionsExpanded;
  }

  isOwnReaction(reactionType) {
    return this.comment.user_reactions.includes(reactionType)
  }

  mapReactions(config, toggleReactionParams) {
    return config.reactions.map((reaction, _) => {
      const numberOfReactions =
        this.comment.reactions && this.comment.reactions[reaction.type];
      if (numberOfReactions) {
        return <ct-button
          small={true}
          active={this.isOwnReaction(reaction.type)}
          onClick={() => this.toggleReaction(
            toggleReactionParams.apiUrl,
            toggleReactionParams.commentableId,
            {
              authToken: toggleReactionParams.authToken,
              reactionType: reaction.type,
              commentId: this.comment.id
            }
          )}
        >
          {reaction.code} {numberOfReactions}
        </ct-button>
      }
    })
  }

  addReaction(reactionType) {
    this.comment.reactions[reactionType] = (this.comment.reactions[reactionType] || 0) + 1;
    this.comment.user_reactions.push(reactionType)
  }

  removeReaction(reactionType) {
    this.comment.reactions[reactionType] -= 1;
    const userReactions = this.comment.user_reactions;
    this.comment.user_reactions = userReactions.filter(reaction => reaction !== reactionType)
  }

  async toggleReaction(apiUrl, commentableId, { authToken, reactionType, commentId }) {
    if (this.isOwnReaction(reactionType)) {
      try {
        await ApiBase.deleteReaction(apiUrl, commentableId, {
          authToken,
          reactionType,
          commentId
        });
      } catch {}
      this.removeReaction(reactionType);
    } else {
      await ApiBase.addReaction(apiUrl, commentableId, {
        authToken,
        reactionType,
        commentId
      });
      this.addReaction(reactionType);
      this.toggleReactionsPanel()
    }
  }

  toggleReply() {
    this.replyComposeVisible = !this.replyComposeVisible
  }

  render() {
    return <Tunnel.Consumer>
      {({ apiUrl, commentableId, config, currentUser }) => (
        <Host>
          {console.log(this.comment)}
          <div class="ct-actions__emoji">
            {this.mapReactions(config, {
              apiUrl,
              commentableId,
              authToken: currentUser.auth_token
            })}
            <ct-button
              small={true}
              onClick={() => this.toggleReactionsPanel()}
            >
              + Emoji
            </ct-button>
          </div>
          {this.reactionsExpanded && <div class="reactions-panel">
            {config.reactions.map((reaction, _) => (
              <ct-button
                small={true}
                onClick={() => this.toggleReaction(apiUrl, commentableId, {
                  authToken: currentUser.auth_token,
                  reactionType: reaction.type,
                  commentId: this.comment.id
                })}
              >
                {reaction.code}
              </ct-button>
            ))}
          </div>}
          <div class="ct-actions__controls">
            <a
              class="action"
              onClick={() => this.toggleReply()}
            >
              Reply
            </a>
            <span class="separator">·</span>
            <a class="action">Share</a>
          </div>
          {this.replyComposeVisible && <div class="ct-actions__reply-compose">
            <ct-compose
              comment={this.comment}
            />
          </div>}
        </Host>
      )}
    </Tunnel.Consumer>
  }
}
