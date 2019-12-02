import {Component, getAssetPath, h, Prop} from "@stencil/core";

@Component({
  tag: 'ct-avatar',
  styleUrl: 'avatar.css',
  shadow: true,
  assetsDirs: ['assets']
})
export class Comment {
  @Prop() user: any;

  render() {
    return <div class="ct-comment__avatar">
      {this.user ?
        <img src={this.user.picture_url} alt={`${this.user.name}'s Avatar`} />
        :
        <img src={getAssetPath('./assets/fallback.jpg')} alt="No avatar" />
      }
    </div>
  }
}
