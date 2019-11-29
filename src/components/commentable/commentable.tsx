import { Component, Prop, h } from '@stencil/core';
import ApiBase from "../../api/base";

@Component({
  tag: 'ct-commentable',
  styleUrl: 'commentable.css',
  shadow: true
})
export class Commentable {
  @Prop() commentableId: string;
  @Prop() googleIdToken: string;
  @Prop() apiUrl: string;
  @Prop() config: any;

  parsedConfig = JSON.parse(this.config);

  componentWillLoad() {
    ApiBase.auth(this.apiUrl, this.googleIdToken)
  }

  render() {
    return <div>
      <p>Component id: {this.commentableId}</p>
      <p>Component Google ID token: {this.googleIdToken}</p>
      <p>Config: {this.apiUrl}</p>
    </div>;
  }
}
