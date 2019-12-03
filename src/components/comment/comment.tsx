import {Component, h, Prop, Host, State} from '@stencil/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import cn from 'classnames';

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
  @Prop() nested: boolean = false;

  @State() areRepliesVisible: boolean = false;

  isDeleted = !(this.comment.user && this.comment.user.name.length);
  hasReplies = this.comment.replies.length > 0;

  toggleReplies() {
    this.areRepliesVisible = !this.areRepliesVisible
  }

  getUserName() {
    if (this.isDeleted) {
      return 'Comment deleted'
    }
    return this.comment.user && this.comment.user.name
  }

  getDate() {
    return this.comment && dayjs(this.comment.created_at)
  }

  getCreatedFromNowDate() {
    return this.getDate().fromNow()
  }

  getFullDate() {
    return this.getDate().toString()
  }

  render() {
    console.log(this.comment);
    return (
      <Host>
        <div class="ct-comment">
          <ct-avatar
            user={this.comment.user}
            nested={this.nested}
          />
          <div class={cn('ct-comment__content', {
            'ct-comment__content--nested': this.nested
          })}>
            <div class="content-meta">
              <div class={cn('name', {
                'name--deleted': this.isDeleted
              })}>{this.getUserName()}</div>
              <div class="separator">·</div>
              <div class="date">
                <abbr title={this.getFullDate()}>{this.getCreatedFromNowDate()}</abbr>
              </div>
            </div>
            <div class="content-body">{this.comment.body}</div>
            <ct-actions />
            {(this.hasReplies && !this.nested) &&
              <ct-button onClick={() => this.toggleReplies()}>Show replies</ct-button>
            }
          </div>
        </div>
        <div class={cn('ct-replies', {
          'ct-replies--visible': this.nested || this.areRepliesVisible
        })}>
          {this.comment.replies.map((reply, _) => (
            <ct-comment
              comment={reply}
              nested={true}
            />
          ))}
        </div>
      </Host>
    )
  }
}
