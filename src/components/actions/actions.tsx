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
        <ct-button small={true}>+ Emoji</ct-button>
      </div>
      <div class="ct-actions__controls">
        <a>Reply</a>
        <span>·</span>
        <a>Share</a>
      </div>
    </Host>
  }
}
