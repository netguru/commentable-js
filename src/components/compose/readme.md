# ct-compose



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default     |
| --------------- | ---------------- | ----------- | -------- | ----------- |
| `apiUrl`        | `api-url`        |             | `string` | `undefined` |
| `comment`       | `comment`        |             | `any`    | `undefined` |
| `commentableId` | `commentable-id` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [ct-actions](../actions)
 - [ct-commentable](../commentable)

### Depends on

- [ct-avatar](../avatar)

### Graph
```mermaid
graph TD;
  ct-compose --> ct-avatar
  ct-actions --> ct-compose
  ct-commentable --> ct-compose
  style ct-compose fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
