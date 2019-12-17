import { createProviderConsumer } from "@stencil/state-tunnel";
import { h } from "@stencil/core";

interface User {
  id: string
  auth_token: string
  email: string
  name: string
  picture_url: string
}

export interface State {
  apiUrl: string,
  currentUser?: User
  comments: any
}

export default createProviderConsumer<State>(
  {
    apiUrl: null,
    currentUser: null,
    comments: []
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
)
