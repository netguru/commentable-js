import {Component, h, Prop, Host} from "@stencil/core";
import cn from 'classnames';

@Component({
  tag: 'ct-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Comment {
  @Prop() small: boolean = false;

  render() {
    return <div class={cn('ct-button', {
      'ct-button--small': this.small
    })}>
      <slot />
    </div>
  }
}
