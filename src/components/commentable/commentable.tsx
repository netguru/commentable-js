import { Component, Prop, h, Watch, State } from '@stencil/core';
import Tunnel from '../../data/user'
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

  @State() currentUser?: any = {};

  // TODO: implement this: parsedConfig = JSON.parse(this.config);

  setCurrentUser = (user: any) => {
    this.currentUser = user
  };

  @Watch('googleIdToken')
  async tokenWatchHandler(nextTokenValue: string) {
    const user = await ApiBase.auth(this.apiUrl, nextTokenValue);
    this.setCurrentUser(user);
  }

  render() {
    const tunnelState = {
      currentUser: this.currentUser
    };
    return <Tunnel.Provider state={tunnelState}>
      <p>Component id: {this.commentableId}</p>
      <p>Component Google ID token: {this.googleIdToken}</p>
      <p>Config: {this.apiUrl}</p>
    </Tunnel.Provider>;
  }
}
