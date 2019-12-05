# ct-comment



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type      | Default     |
| --------- | --------- | ----------- | --------- | ----------- |
| `comment` | `comment` |             | `any`     | `undefined` |
| `level`   | `level`   |             | `number`  | `0`         |
| `nested`  | `nested`  |             | `boolean` | `false`     |


## Dependencies

### Used by

 - [ct-comment]()
 - [ct-commentable](../commentable)

### Depends on

- [ct-avatar](../avatar)
- [ct-actions](../actions)
- [ct-button](../button)
- [ct-comment]()

### Graph
```mermaid
graph TD;
  ct-comment --> ct-comment
  ct-actions --> ct-button
  ct-actions --> ct-compose
  ct-compose --> ct-avatar
  ct-commentable --> ct-comment
  style ct-comment fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
