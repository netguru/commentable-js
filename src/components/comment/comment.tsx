import { Component, h } from '@stencil/core';

@Component({
  tag: 'ct-comment',
  styleUrl: 'comment.css',
  shadow: true
})
export class Comment {

  render() {
    return <div>Comment here</div>;
  }
}
