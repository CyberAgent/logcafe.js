logcafe.js
============

# About

LogCafe.js is a logging framework to support browser application logging.

# Usage (node.js)

```javascript
$ node
> var LogCafe = require('logcafe');
> var logCafe = new LogCafe();

> var conf = { // configure
...     level: 'DEBUG',
...     separator: ', '
... };

> logCafe.setConfigure(conf); // set configure
{ loggers: {},
  config: { level: 'DEBUG', separator: ', ' } }

> var log = logCafe.getLogger('logcafe'); // set Logger
> log.info('logger succesfully got', 'test'); // output log
[info][logcafe] logger succesfully got, test
```

# Usage (browser)

```javascript
var logCafe = new LogCafe();

var conf = { // configure
    level: 'DEBUG',
    separator: ', '
};

logCafe.setConfigure(conf); // set configure

var log = logCafe.getLogger('logcafe'); // set Logger

log.info('logger succesfully got', 'test'); // output log

>> logger succesfully got, test
```

## Configure

```javascript
{
    level: 'DEBUG', // OFF|TRACE|DEBUG|INFO|WARN|ERROR
    separator: ', ' // Consolidation of argument, it is a separator.
}
```

## Operating environment

* node.js
* require.js
* browser

# AUTHORS

## Kei FUNAGAYAMA

* [https://github.com/fkei](https://github.com/fkei)
* [https://twitter.com/fkei](https://twitter.com/fkei)

## Kazuma MISHIMAGI

* https://github.com/maginemu
* https://twitter.com/maginemu


## CyberAgent Publicity

* infosys_oss@cyberagent.co.jp



## Copyright

CyberAgent, Inc. All rights reserved.

## License

### The MIT License (MIT)

```
Copyright (c) 2013- CyberAgent Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
