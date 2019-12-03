import {Component, getAssetPath, h, Prop} from "@stencil/core";
import cn from 'classnames';

@Component({
  tag: 'ct-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class Comment {
  @Prop() user: any;
  @Prop() nested: boolean = false;

  render() {
    return <div class={cn('ct-comment__avatar', {
      'ct-comment__avatar--nested': this.nested
    })}>
      {this.user ?
        <img src={this.user.picture_url} alt={`${this.user.name}'s Avatar`} />
        :
        <img src={getAssetPath('./assets/fallback.jpg')} alt="No avatar" />
      }
    </div>
  }
}
