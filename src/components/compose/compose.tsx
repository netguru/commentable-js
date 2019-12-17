import { Component, h, Prop, State } from "@stencil/core";
import cn from 'classnames';
import Tunnel from '../../data';
import ApiBase from '../../api/base';

@Component({
  tag: 'ct-compose',
  styleUrl: 'compose.css',
})
export class Comment {
  @Prop() comment: any;

  @State() isExpanded: boolean = false;
  @State() isLoading: boolean = false;
  @State() message: string = '';

  textArea: any;

  handleMessageChange = (event) => {
    this.message = event.target.value;
    this.updateFormUI();
  }

  updateFormUI = () => {
    this.isExpanded = !!this.message;
    if (this.isExpanded) {
      this.textArea.style.height = '1px';
      this.textArea.style.height = `${this.textArea.scrollHeight}px`;
    } else {
      this.textArea.style.height = '';
    }
  }

  async addComment(apiUrl, commentableId, user, setComments, comments) {
    if (this.message.length < 1) return;
    this.isLoading = true;
    const newComment = await ApiBase.addComment(apiUrl, commentableId, {
      message: this.message,
      authToken: user.auth_token,
      repliesTo: this.comment ? this.comment.id : null,
    });
    this.isLoading = false;
    this.message = '';
    this.updateFormUI();
    if (this.comment) {
      this.comment.replies = [...this.comment.replies, newComment];
      setComments(comments);
    } else {
      setComments([newComment, ...comments]);
    }
  }

  render() {
    return <Tunnel.Consumer>
      {({ apiUrl, commentableId, currentUser, comments, setComments }) => (
        <div class="commentable__compose">
          <div class="commentable__compose-ui">
            <ct-avatar user={currentUser} isSmall={!!this.comment} />
            <div class={cn('commentable__compose-form', {
              'commentable__compose-form--expanded': this.isExpanded,
            })}>
              <textarea
                ref={el => this.textArea = el}
                placeholder={this.comment ? "Add a reply.." : "Add a comment.."}
                value={this.message}
                disabled={this.isLoading}
                onInput={this.handleMessageChange}
              />
              {(this.isExpanded && !this.isLoading) && (
                <div class="commentable__compose-controls">
                  <button
                    class="commentable__compose-send"
                    onClick={() => this.addComment(
                      apiUrl,
                      commentableId,
                      currentUser,
                      setComments,
                      comments,
                    )}
                  >
                    Send
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAAAz1JREFUWAntVttLFGEUP2d21CI1KTUJ7AKCewGthMxtq5dgqdy/pAffStKHpIe0kDAjosAee6qgXU3pxaIdUewhcBdLzUAi1ELp5l6cOZ2phna32Z1tPhGEnZf5vnPOnN/vO7dvAApPIQKFCGztCKBd+iPh2eqklPQdLNdCHo8nYdeP1XeSlUE2fRzibZqqPpxbodmgMnV+aGamJJutiNw2QUmSXv0BriUNbq0vJd4FlWiboixsFyGU+a3tFD+bnNsZi619IgA5zSnCogR4vah09x1/Y833NJ2NjW2COlYwHHlBRCfMcBFwGZF6K0i+7fM5v5rZ5COznWLdORIMZwMhoCqNoHsF1ffBcLRTj3g221xysQiORY+Qqhm1mAtH160iYh+Wlfa1NuxfsTI29EIEOb0YVCIfgWCP4dDqzSS/MGj/Nlm6cbrZ9dnKXizFXGSc5hErkFQ9H6pcI+r4kdQ49VM9+jxN1WeuhQjqziQpex1mgqXvqZQILiQgNs/N1js4EalJ1//eCaVYdxGcfFNJ8fVFIBI6LHd9jBDuIco9AW/9B4OsMMFfJF9GzyLQIQZw81x0s8zJhG0NbCYaB4SB4qKSq/6jdQsbQtA4rfHmOpMGJ2cOYFJ1c725uYncXKwNTPqwYWP11udowOepFkpLNpBRLk0mt0MjrYrJ7eOZWM+2zmz2/8rxGxfMNV2+IREMjb11kZY8BoRNTKaJvTbaSjFigqfC3WIsueI/Xre0IQT1dHIX6vOsQndo5+HZyOeCB8VFjk5/s3M+1Uf6RZ+qyXM9pEQb2NQ2OU7iMMhye6C5/rUZpDBBDfEUp9PMd04ZN8E4OKT2QItrNJehMEHStJO5ADJ1iDCNkqOjtcX1KFNnthdqEv0uDoWjS1xAlWbOU2VcZzx8qavV6xngtZqqy7UWiuDT8agrD3KrEkL3Liy/6fXWruUiY6YTIqipXH/cfqYP4hrfLv1YVtb9P79Xmb6ECBKY1R+qPDXuA8qXU+/UTOB894IEkRvkbwS5Mx+DJF9iYtP5ErCys01wZGK2Np6I7dUBuOif82/XxXMtnnErwE3Tcwc7Qkqk68lY5MymgRaAChEoRGALRuAnl48ZNkHhb0IAAAAASUVORK5CYII=" alt="send" />
                  </button>
                </div>
              )}
            </div>
          </div>
          {this.isLoading && (
            <ct-loading />
          )}
        </div>
      )}
    </Tunnel.Consumer>
  }
}
