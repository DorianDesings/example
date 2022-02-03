const sass = require('sass');

const result = sass.compile("./scss/styles.scss");
console.log(result.css)

// OR

// Note that `compileAsync()` is substantially slower than `compile()`.
// const result = await sass.compileAsync("./css/styles.css");
// console.log(result)