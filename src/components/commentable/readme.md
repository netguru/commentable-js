# commentable-section



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type     | Default     |
| --------------- | ----------------- | ----------- | -------- | ----------- |
| `apiUrl`        | `api-url`         |             | `string` | `undefined` |
| `commentableId` | `commentable-id`  |             | `string` | `undefined` |
| `config`        | `config`          |             | `any`    | `undefined` |
| `googleIdToken` | `google-id-token` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [ct-comment](../comment)

### Graph
```mermaid
graph TD;
  ct-commentable --> ct-comment
  ct-comment --> ct-avatar
  ct-comment --> ct-comment
  style ct-commentable fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
