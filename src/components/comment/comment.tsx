import { Component, h, Prop, State } from '@stencil/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import cn from 'classnames';
import Tunnel from '../../data'
import ApiBase from '../../api/base';

dayjs.extend(relativeTime);

@Component({
  tag: 'ct-comment',
  styleUrl: 'comment.css',
})
export class Comment {
  @Prop() comment: any;
  @Prop() level: number = 0;

  @State() areRepliesVisible: boolean = false;
  @State() menuExpanded: boolean = false;

  isReply = this.level > 0;
  isDeleted = () => !this.comment.user;

  hasReplies = () => this.comment.replies.length > 0;
  toggleReplies = () => this.areRepliesVisible = !this.areRepliesVisible;
  toggleMenu = () => this.menuExpanded = !this.menuExpanded;
  isOwner = currentUser => this.comment.user && this.comment.user.id == currentUser.id;

  getUserName = () => (
    this.isDeleted()
      ? 'Comment deleted'
      : this.comment.user && this.comment.user.name
  );

  getDate = () => this.comment && dayjs(this.comment.created_at);
  getCreatedFromNowDate = () => this.getDate().fromNow();
  getFullDate = () => this.getDate().toString();

  deleteComment = (apiUrl, commentableId, authToken) => async () => {
    const comment = await ApiBase.deleteComment(apiUrl, commentableId, this.comment.id, { authToken });
    if (comment) {
      this.comment = {
        ...this.comment,
        ...comment,
        user: null,
      };
    } else {
      this.comment = {
        ...this.comment,
        isDeleted: true,
      };
    }
    this.menuExpanded = false;
  }

  render() {
    return !this.comment.isDeleted && (
      <Tunnel.Consumer>
        {({ apiUrl, commentableId, currentUser }) => (
          <div>
            <div class="commentable-comment">
              <ct-avatar user={this.comment.user} isSmall={this.isReply} />
              <div class={cn('commentable-comment__content', {
                'commentable-comment__content--reply': this.isReply
              })}>
                {currentUser && this.isOwner(currentUser) && (
                  <button
                    onClick={this.deleteComment(apiUrl, commentableId, currentUser.auth_token)}
                    class={cn('commentable-comment__delete', {
                      'commentable-comment__delete--visible': this.menuExpanded,
                    })}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAipJREFUSA3tVs1LG0EUf2/cGNHm1GLpoZSCLWhAaguGZnvpByoh8SCCiAgeeij0VA89+F/02GNPevBg3dp6EBHZVAqFQnFD+y+0+HEQq8nuPt9UZpqk2SEL680Hy8x7v9/83nzsfCAYzCnvrhPhXUT4GkF7iojvivmB+Qhchy1di65sluzs81bwquvtcCfaMtEWKwESOmXvfaQOwjARnHCnv7fiEIDN8QPGK61wGUPAxaI9sGQBwT1C2G5JJNiQcRaMsk8SiMK5AyUC+iY5Fqf8Mm5nZ6WTtPEaemoN5YhuOG6lkHSScz26onQtHtojHvyaCiRd8hr9lbTSmWs6a9JJpN7V2vXqRehGap6Pi+GPOz9sP/AXMz09g4+Hbh9GtjAAzmdvmEJatrrTDwr37/yup+oNG1DQxcDN0z/HOlZPbKsuoFNqkF/taOYbRVfd3VdrZW9ONXLKldeO680o/4PrLfAfO6V8U2lMxHtgNCDgv1IZFRApr7yQNyQKyCnfVBoTmRrGxS4TxZ0xzb+cOj0VcSvGNwNmMtMdx9VAiaYQJkKR9pXfnRLFrhq2dWj+S4SCBQOodVp63YqDtw6UqCzH8tn9ev9Zrn+v3qdQ8NETgFVL815uNC2aStFPfjoRVP2RRkoMj8IRQNwbtft+NbfSp7cE+KHyhh8jLznfNt+8R81ks4+9fInmQOCL8Xz2bTO3IZEEOdkkF0/4i3sh7oMQK6WH/Vvc9j87A+OQlUGzivNEAAAAAElFTkSuQmCC" alt="delete" />
                    Delete comment
                  </button>
                )}
                <div class="commentable-comment__info">
                  <div class={cn('commentable-comment__user', {
                    'commentable-comment__user--deleted': this.isDeleted
                  })}>
                    {this.getUserName()}
                  </div>
                  <div>·</div>
                  <div class="commentable-comment__date">
                    <abbr title={this.getFullDate()}>{this.getCreatedFromNowDate()}</abbr>
                  </div>
                  {currentUser && this.isOwner(currentUser) && (
                    <button onClick={this.toggleMenu} class="commentable-comment__menu">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAAXNSR0IArs4c6QAAALBJREFUOBFjYCAAGGHyO0/dkf31+2cxkC/NyMiw29tSazYjI+N/sIKtp65K/PvFcPk/w38RmAZGBqapvjZaOUwggX+/GdKRJcGKGP9nbbn0UBCsgIGRQQKmE0b///+f8f+XH+JgBUyMDPthEjAa6I4nPpZqt8EKvC21VzEyME6BSzIwvmBmYokAOvIv3Bcgyc3Hbkr//88gxSvFdtlRUfEHTMOgp+G+GI2LAY+rERIXAKMkjKE7nss0AAAAAElFTkSuQmCC" alt="Dot menu" />
                    </button>
                  )}
                </div>
                <div class="commentable-comment__body">{this.comment.body}</div>
                {currentUser && <ct-actions comment={this.comment} />}
                {(this.hasReplies() && !this.isReply) && (
                  <button class="commentable-comment__show-replies" onClick={this.toggleReplies}>
                    {this.areRepliesVisible ? 'Hide replies' : `Show replies (${this.comment.replies.length})`}
                  </button>
                )}
              </div>
            </div>
            <div class={cn('commentable-comment__replies', {
              'commentable-comment__replies--visible': this.comment.replies.length && (this.isReply || this.areRepliesVisible),
            })}>
              {this.comment.replies.map(reply => (
                <ct-comment
                  key={reply.id || reply.created_at}
                  comment={reply}
                  level={this.level + 1}
                />
              ))}
            </div>
          </div>
        )}
      </Tunnel.Consumer>
    );
  }
}
