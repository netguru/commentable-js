import { Component, Prop, h, Watch, State } from '@stencil/core';
import Tunnel from '../../data'
import ApiBase from "../../api/base";

@Component({
  tag: 'ct-commentable',
  styleUrls: ['commentable.css'],
})
export class Commentable {
  @Prop() commentableId: string;
  @Prop() googleIdToken: string;
  @Prop() apiUrl: string;
  @Prop() config: any;

  @State() currentUser?: any;
  @State() comments?: any = [];
  @State() isLoading: boolean = true;

  parsedConfig = JSON.parse(this.config);
  @State() forceUpdate = 0;

  async componentDidLoad() {
    await this.fetchComments(this.commentableId);
  }

  setCurrentUser = user => this.currentUser = user;
  setComments = comments => {
    this.comments = comments;
    this.forceUpdate++;
  }

  async fetchComments(commentableId: string) {
    this.isLoading = true;
    const requestParams = {} as any;
    if (this.currentUser) {
      requestParams.auth_token = this.currentUser.auth_token;
    }
    const { comments } = await ApiBase.fetchComments(
      this.apiUrl,
      commentableId,
      requestParams,
    );
    this.setComments(comments.reverse());
    this.isLoading = false;
  }

  @Watch('commentableId')
  async commentableIdWatchHandler(nextIdValue: string) {
    await this.fetchComments(nextIdValue);
  }

  @Watch('googleIdToken')
  async tokenWatchHandler(nextTokenValue: string) {
    this.isLoading = true;
    const user = await ApiBase.auth(this.apiUrl, nextTokenValue);
    this.setCurrentUser(user);
  }

  @Watch('currentUser')
  async currentUserWatchHandler() {
    await this.fetchComments(this.commentableId);
  }

  render() {
    const tunnelState = {
      apiUrl: this.apiUrl,
      commentableId: this.commentableId,
      currentUser: this.currentUser,
      comments: this.comments,
      setComments: this.setComments,
      config: this.parsedConfig,
    };
    return (
      <Tunnel.Provider state={tunnelState}>
        <div class="commentable">
          {this.isLoading && <ct-loading />}
          {(!this.isLoading && this.currentUser) && <ct-compose />}
          {!this.isLoading && (
            <div class="commentable__comments">
              {this.comments.map((comment, _) => (
                <ct-comment key={comment.id || comment.created_at} comment={comment} />
              ))}
            </div>
          )}
        </div>
      </Tunnel.Provider>
    );
  }
}
