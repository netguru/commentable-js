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

  @State() isExpanded: boolean = false;
  @State() message: string = '';

  handleMessageChange(event) {
    this.message = event.target.value
  }

  textareaOnFocus() {
    this.isExpanded = true
  }

  async addComment(user, setComments, comments) {
    if (this.message.length < 1) return;
    const newComment = await ApiBase.addComment(this.apiUrl, this.commentableId, {
      message: this.message,
      authToken: user.auth_token
    });
    setComments([newComment, ...comments])
  }

  render() {
    return <Tunnel.Consumer>
      {({ currentUser, comments, setComments }) => (
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
                    currentUser,
                    setComments,
                    comments
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
