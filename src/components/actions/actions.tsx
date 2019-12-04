import {Component, h, Host, Prop} from "@stencil/core";
import Tunnel from '../../data';

@Component({
  tag: 'ct-actions',
  styleUrl: 'actions.css',
  shadow: true
})
export class Comment {
  @Prop() comment: any;

  mapReactions(config) {
    return config.reactions.map((reaction, _) => {
      const numberOfReactions =
        this.comment.reactions && this.comment.reactions[reaction.type];
      if (numberOfReactions) {
        return <ct-button small={true}>{reaction.code} {numberOfReactions}</ct-button>
      }
    })
  }

  render() {
    return <Tunnel.Consumer>
      {({ config }) => (
        <Host>
          <div class="ct-actions__emoji">
            {this.mapReactions(config)}
            <ct-button small={true}>+ Emoji</ct-button>
          </div>
          <div class="ct-actions__controls">
            <a class="action">Reply</a>
            <span class="separator">·</span>
            <a class="action">Share</a>
          </div>
        </Host>
      )}
    </Tunnel.Consumer>
  }
}
