import {Component, h, Prop, Host} from '@stencil/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

@Component({
  tag: 'ct-comment',
  styleUrl: 'comment.css',
  shadow: true
})
export class Comment {
  @Prop() commentableId: string;
  @Prop() config: any;
  @Prop() comment: any;

  getUserName() {
    if (this.comment.user && this.comment.user.name.length) {
      return this.comment.user && this.comment.user.name
    }
    return 'Comment deleted'
  }

  dateCreatedFromNow() {
    return this.comment && dayjs(this.comment.created_at).fromNow()
  }

  render() {
    console.log(this.comment);
    return (
      <Host>
        <div class="ct-comment">
          <ct-avatar
            user={this.comment.user}
          />
          <div class="ct-comment__content">
            <div class="content-meta">
              <div class="name">{this.getUserName()}</div>
              <div class="separator">·</div>
              <div class="date">{this.dateCreatedFromNow()}</div>
            </div>
            <div class="content-body">{this.comment.body}</div>
          </div>
        </div>
        <div class="ct-replies">
          {this.comment.replies.map((reply, _) => (
            <ct-comment
              comment={reply}
            />
          ))}
        </div>
      </Host>
    )
  }
}
