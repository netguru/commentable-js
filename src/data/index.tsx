import {createProviderConsumer} from "@stencil/state-tunnel";
import { h } from "@stencil/core";

interface Index {
  id: string
  auth_token: string
  email: string
  name: string
  picture_url: string
}

export interface State {
  currentUser: Index
  comments: any
}

export default createProviderConsumer<State>(
  {
    currentUser: {
      id: null,
      auth_token: null,
      email: null,
      name: null,
      picture_url: null
    },
    comments: []
  },
  (subscribe, child) => (
    <context-consumer subscribe={subscribe} renderer={child} />
  )
)
