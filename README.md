# Highlight.js ArkTS support

The Highlight.js plugin for HarmonyOS's ArkTS

Online Demo: https://harmonyos-dev.github.io/aigc-harmonyos-sample/

## Static website or simple usage

```html
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"></script>
<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@harmonyos-dev/highlightjs-arkts@0.0.5/src/languages/arkts.js"></script>
```

## With Node

```javascript
var hljs = require('highlightjs');
var hljsArkts = require('@harmonyos-dev/highlightjs-arkts');

hljs.registerLanguage('arkts', hljsArkts);
hljs.highlightAll();
```

## TODOs:

- [x] publish to npm
- [x] rebuild project
- [ ] ...


## License

Highlight.js is released under the BSD 3-Clause License. See LICENSE file for details. Highlightjs-arkts is released 
under the MIT License. See LICENSE file for details.

