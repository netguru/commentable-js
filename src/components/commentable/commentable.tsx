import { Component, Prop, h, Watch, State } from '@stencil/core';
import Tunnel from '../../data'
import ApiBase from "../../api/base";

@Component({
  tag: 'ct-commentable',
  styleUrls: ['commentable.css'],
  shadow: true
})
export class Commentable {
  @Prop() commentableId: string;
  @Prop() googleIdToken: string;
  @Prop() apiUrl: string;
  @Prop() config: any;

  @State() currentUser?: any = {};
  @State() comments?: any = [];
  @State() isLoading: boolean = true;

  // TODO: implement this: parsedConfig = JSON.parse(this.config);

  setCurrentUser = (user: any) => {
    this.currentUser = user
  };

  setComments = (comments: any) => {
    this.comments = comments
  };

  @Watch('googleIdToken')
  async tokenWatchHandler(nextTokenValue: string) {
    const user = await ApiBase.auth(this.apiUrl, nextTokenValue);
    this.setCurrentUser(user);
  }

  @Watch('currentUser')
  async currentUserWatchHandler() {
    const requestParams = {} as any;
    if (this.currentUser) {
      requestParams.auth_token = this.currentUser.auth_token
    }
    const { comments } = await ApiBase.fetchComments(
      this.apiUrl,
      this.commentableId,
      requestParams
    );
    this.setComments(comments.reverse());
    this.isLoading = false
  }

  render() {
    const tunnelState = {
      currentUser: this.currentUser,
      comments: this.comments
    };
    return <Tunnel.Provider state={tunnelState}>
      {this.isLoading ?
        <p>Loading</p>
      :
        this.comments.map((comment, _) => (
          <ct-comment
            comment={comment}
          />
        ))
      }
    </Tunnel.Provider>;
  }
}
