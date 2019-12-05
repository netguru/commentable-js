import {Component, h, Prop, State} from "@stencil/core";
import Tunnel from '../../data';
import ApiBase from '../../api/base';

@Component({
  tag: 'ct-compose',
  styleUrl: 'compose.css',
  shadow: true
})
export class Comment {
  @Prop() apiUrl: string;
  @Prop() commentableId: string;
  @Prop() comment: any;

  @State() isExpanded: boolean = false;
  @State() message: string = '';

  handleMessageChange(event) {
    this.message = event.target.value
  }

  textareaOnFocus() {
    this.isExpanded = true
  }

  addReply(reply) {
    this.comment.replies = [reply, ...this.comment.replies]
  }

  async addComment(apiUrl, commentableId, user, setComments, comments, repliesToCommentId) {
    if (this.message.length < 1) return;
    const newComment = await ApiBase.addComment(apiUrl, commentableId, {
      message: this.message,
      authToken: user.auth_token,
      repliesTo: repliesToCommentId
    });
    if (this.comment) {
      this.addReply(newComment)
    } else {
      setComments([newComment, ...comments])
    }
  }

  render() {
    return <Tunnel.Consumer>
      {({ apiUrl, commentableId, currentUser, comments, setComments }) => (
        <div class="ct-compose">
          <ct-avatar
            user={currentUser}
          />
          <div class="ct-compose__textarea">
            <textarea
              class="inner-textarea"
              onFocus={() => this.textareaOnFocus()}
              placeholder="Add a comment..."
              value={this.message}
              onInput={(event: any) => this.handleMessageChange(event)}
            />
            {this.isExpanded &&
              <div class="compose-controls">
                <p>Please click the icon to send</p>
                <a
                  class="control-send"
                  onClick={() => this.addComment(
                    apiUrl,
                    commentableId,
                    currentUser,
                    setComments,
                    comments,
                    this.comment.id
                  )}
                >➡</a>
              </div>
            }
          </div>
        </div>
      )}
    </Tunnel.Consumer>
  }
}
