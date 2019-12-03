import {Component, h, Host} from "@stencil/core";

@Component({
  tag: 'ct-actions',
  styleUrl: 'actions.css',
  shadow: true
})
export class Comment {
  render() {
    return <Host>
      <div class="ct-actions__emoji">
        <ct-button small={true}>👋 9</ct-button>
        <ct-button small={true}>😱 99+</ct-button>
        <ct-button small={true}>💪 15</ct-button>
        <ct-button small={true}>+ Emoji</ct-button>
      </div>
      <div class="ct-actions__controls">
        <a class="action">Reply</a>
        <span class="separator">·</span>
        <a class="action">Share</a>
      </div>
    </Host>
  }
}
