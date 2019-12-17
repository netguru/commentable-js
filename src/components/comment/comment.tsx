import { Component, h, Prop, State } from '@stencil/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import cn from 'classnames';
import Tunnel from '../../data'

dayjs.extend(relativeTime);

@Component({
  tag: 'ct-comment',
  styleUrl: 'comment.css',
})
export class Comment {
  @Prop() comment: any;
  @Prop() level: number = 0;

  @State() areRepliesVisible: boolean = false;

  isReply = this.level > 0;
  isDeleted = !this.comment.user;

  hasReplies = () => this.comment.replies.length > 0;
  toggleReplies = () => this.areRepliesVisible = !this.areRepliesVisible;

  getUserName = () => (
    this.isDeleted
      ? 'Comment deleted'
      : this.comment.user && this.comment.user.name
  );

  getDate = () => this.comment && dayjs(this.comment.created_at);
  getCreatedFromNowDate = () => this.getDate().fromNow();
  getFullDate = () => this.getDate().toString();

  render() {
    return (
      <Tunnel.Consumer>
        {({ currentUser }) => (
          <div>
            <div class="commentable-comment">
              <ct-avatar user={this.comment.user} isSmall={this.isReply} />
              <div class={cn('commentable-comment__content', {
                'commentable-comment__content--reply': this.isReply
              })}>
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
                  <div class="commentable-comment__menu">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAAXNSR0IArs4c6QAAALBJREFUOBFjYCAAGGHyO0/dkf31+2cxkC/NyMiw29tSazYjI+N/sIKtp65K/PvFcPk/w38RmAZGBqapvjZaOUwggX+/GdKRJcGKGP9nbbn0UBCsgIGRQQKmE0b///+f8f+XH+JgBUyMDPthEjAa6I4nPpZqt8EKvC21VzEyME6BSzIwvmBmYokAOvIv3Bcgyc3Hbkr//88gxSvFdtlRUfEHTMOgp+G+GI2LAY+rERIXAKMkjKE7nss0AAAAAElFTkSuQmCC" alt="Dot menu" />
                  </div>
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
