# OData V4 Literal

Convert OData V4 literal AST nodes to JavaScript variables

## Usage

```javascript
var Literal = require("odata-v4-literal").Literal;
console.log(Literal.convert("Edm.String", "'Hello O''Neill'"));
```