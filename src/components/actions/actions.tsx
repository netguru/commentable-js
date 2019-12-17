import { Component, h, Prop, State } from "@stencil/core";
import cn from 'classnames';
import Tunnel from '../../data';
import ApiBase from '../../api/base';

@Component({
  tag: 'ct-actions',
  styleUrl: 'actions.css',
})
export class Comment {
  @Prop() comment: any;
  @State() reactionsExpanded: boolean = false;
  @State() replyComposeVisible: boolean = false;

  toggleReactionsPanel = () => this.reactionsExpanded = !this.reactionsExpanded;
  isOwnReaction = reactionType => this.comment.user_reactions.includes(reactionType);
  toggleReply = () => this.replyComposeVisible = !this.replyComposeVisible;

  renderReactions = (reactions, toggleReactionParams) => {
    return reactions.map((reaction) => {
      const numberOfReactions = this.comment.reactions[reaction.type];
      return numberOfReactions > 0 && (
        <button
          class={cn("commentable-actions__reaction", {
            'commentable-actions__reaction--selected': this.isOwnReaction(reaction.type),
          })}
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
        </button>
      )
    })
  }

  addReaction = (reactionType) => {
    this.comment = {
      ...this.comment,
      reactions: {
        ...this.comment.reactions,
        [reactionType]: (this.comment.reactions[reactionType] || 0) + 1,
      },
      user_reactions: [...this.comment.user_reactions, reactionType],
    }
  }

  removeReaction = (reactionType) => {
    const newUserReactions = this.comment.user_reactions.filter(reaction => reaction !== reactionType);
    this.comment = {
      ...this.comment,
      reactions: {
        ...this.comment.reactions,
        [reactionType]: this.comment.reactions[reactionType] - 1,
      },
      user_reactions: newUserReactions,
    };
  }

  async toggleReaction(apiUrl, commentableId, { authToken, reactionType, commentId }) {
    if (this.isOwnReaction(reactionType)) {
      try {
        await ApiBase.deleteReaction(apiUrl, commentableId, {
          authToken,
          reactionType,
          commentId,
        });
      } catch {}
      this.removeReaction(reactionType);
    } else {
      await ApiBase.addReaction(apiUrl, commentableId, {
        authToken,
        reactionType,
        commentId,
      });
      this.addReaction(reactionType);
      this.reactionsExpanded = false;
    }
  }

  render() {
    return <Tunnel.Consumer>
      {({ apiUrl, commentableId, config, currentUser }) => (
        <div class="commentable-actions">
          <div class="commentable-actions__reactions">
            {this.renderReactions(config.reactions, {
              apiUrl,
              commentableId,
              authToken: currentUser.auth_token
            })}
            {config.reactions.filter(r => !this.comment.user_reactions.includes(r.type)).length > 0 && (
              <button
                class="commentable-actions__add-reaction"
                onClick={this.toggleReactionsPanel}
              >
                + Reaction
              </button>
            )}
          </div>
          {this.reactionsExpanded && (
            <div class="commentable-actions__reactions-panel">
              {config.reactions
                  .filter(r => !this.comment.user_reactions.includes(r.type))
                  .map(reaction => (
                    <button
                      class="commentable-actions__reaction-select"
                      onClick={() => this.toggleReaction(apiUrl, commentableId, {
                        authToken: currentUser.auth_token,
                        reactionType: reaction.type,
                        commentId: this.comment.id
                      })}
                    >
                      {reaction.code}
                    </button>
                  )
              )}
            </div>
          )}
          <a class="commentable-actions__reply" onClick={this.toggleReply}>
            Reply
          </a>
          {this.replyComposeVisible && (
            <div class="commentable-actions__compose-reply">
              <ct-compose comment={this.comment} />
            </div>
            )}
        </div>
      )}
    </Tunnel.Consumer>
  }
}
