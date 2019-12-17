import { Component, h} from '@stencil/core';

@Component({
  tag: 'ct-loading',
  styleUrls: ['loading.css'],
})
export class Loading {
  render() {
    return (
      <div class="commentable-loading">
        <div class="la-ball-fall">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
