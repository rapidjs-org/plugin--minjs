## JS Minify  &hairsp; <a href="https://rapidjs.org" target="_blank"><img src="https://rapidjs.org/assets/img/plugin-badge.svg" alt="rJS Plugin"></a>

Minified/obfuscated JS scripts with [UglifyJS](https://github.com/mishoo/UglifyJS).

### Install

``` console
npm i rapidjs-org/plugin--minjs
```

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/minjs"
}
```

### Use

All plugin sourced scripts are mapped to the public directory, but with minifed contents.

```
└─ /src …
   └─ /js
      ├─ __rjs.plugin.json
      ├─ app.js
      ├─ forms.js
      └─ /util
         └─ dialog.js
```

### Configure

The output path within the public directory can be altered through the `outPath` configuration. [UglifyJS options](https://www.npmjs.com/package/uglify-js#api-reference) can be assigned to `uglifyJSOptions`.

<sub><code>__rjs.plugin.json</code></sub>
``` json
{
  "package": "@plugins.rapidjs.org/minjs",
  "config": {
    "outPath": "assets/js/",
    "uglifyJSOptions": {
      "output": {
        "comments": "all"
      }
    }
  }
}
```

##

<sub>&copy; Thassilo Martin Schiepanski</sub>