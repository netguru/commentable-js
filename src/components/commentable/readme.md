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

- [ct-loading](../loading)
- [ct-compose](../compose)
- [ct-comment](../comment)

### Graph
```mermaid
graph TD;
  ct-commentable --> ct-loading
  ct-commentable --> ct-compose
  ct-commentable --> ct-comment
  ct-compose --> ct-avatar
  ct-compose --> ct-loading
  ct-comment --> ct-avatar
  ct-comment --> ct-actions
  ct-comment --> ct-comment
  ct-actions --> ct-compose
  style ct-commentable fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
