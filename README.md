## system-gist

[![Build Status](https://travis-ci.org/matthewp/system-gist.svg?branch=master)](https://travis-ci.org/matthewp/system-gist)

A StealJS and SystemJS plugin for loading modules from Gists.

### Installation

```shell
npm install system-gist --save
```

### Use

Simply provide the gist id that you want to load and it just works.

```js
import is from "8175510!gist";

is(NaN, NaN); // -> true
```

### License

MIT
