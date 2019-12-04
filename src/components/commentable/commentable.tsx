import { Component, Prop, h, Watch, State } from '@stencil/core';
import Tunnel from '../../data'
import ApiBase from "../../api/base";

@Component({
  tag: 'ct-commentable',
  styleUrls: ['commentable.css', 'loading.css'],
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

  parsedConfig = JSON.parse(this.config);

  setCurrentUser = (user: any) => {
    this.currentUser = user
  };

  setComments = (comments: any) => {
    this.comments = comments
  };

  @Watch('googleIdToken')
  async tokenWatchHandler(nextTokenValue: string) {
    this.isLoading = true;
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

  renderLoading() {
    return <div class="ct-loading">
      <div class="la-ball-fall">
        <div />
        <div />
        <div />
      </div>
    </div>
  }

  render() {
    const tunnelState = {
      currentUser: this.currentUser,
      comments: this.comments,
      setComments: this.setComments,
      config: this.parsedConfig
    };
    return <Tunnel.Provider state={tunnelState}>
      {this.isLoading ?
        this.renderLoading()
      :
        <div class="ct-commentable">
          <ct-compose
            apiUrl={this.apiUrl}
            commentableId={this.commentableId}
          />
          {this.comments.map((comment, _) => (
            <ct-comment
              comment={comment}
            />
          ))}
        </div>
      }
    </Tunnel.Provider>;
  }
}
