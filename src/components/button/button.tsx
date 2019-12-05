import {Component, h, Prop} from "@stencil/core";
import cn from 'classnames';

@Component({
  tag: 'ct-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Comment {
  @Prop() small: boolean = false;
  @Prop() active: boolean = false;

  render() {
    return (
      <div
        class={cn('ct-button', {
          'ct-button--small': this.small,
          'ct-button--active': this.active
        })}
      >
        <slot />
      </div>
    )
  }
}
