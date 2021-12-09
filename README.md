# TSTL json.lua

Declarations for [json.lua](https://github.com/rxi/json.lua), A lightweight JSON library for Lua.


| Command | Description |
|-|-|
| `yarn add -D tstl-json-lua` | Install these declarations |
| `yarn add rxi/json.lua` | Install json.lua |


Upon installation these declarations can be linked to a _tsconfig.json_ file.

```json
{
    "compilerOptions": {
        "types": [
            "tstl-json-lua"
        ]
    }
}
```

And used within any _.ts_ file.

```ts
import * as json from "json";

let s = json.encode({
    n: 42,
    s: "Hello world"
});

print(json.decode(s));
```

Make sure to append `";./node_modules/json.lua/?.lua"` to your `package.path` in a _conf.ts_ file (this is run first) to assist where Lua looks for modules.

```ts
package.path += ";./node_modules/json.lua/?.lua";
```

Also you need to add `"typescript-to-lua/language-extensions"` to _tsconfig.json_ file.
```json
{
    "compilerOptions": {
        "types": [
            "typescript-to-lua/language-extensions"
        ]
    }
}
```