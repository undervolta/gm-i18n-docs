# i18n_get_cache_id()

The `i18n_get_cache_id()` function is used to get the cache ID from the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_cache_id(key, [data], [locale], [i18n]);
```

```ts [Signature]
function i18n_get_cache_id(
    key: string,
    data?: number | any[] | { 
        [key: string]: any; 
    },
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): number
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| key         | String            |              | The message key to get the cache ID from (e.g. `hello`, `bye`, `long_text`, etc.). |
| data        | Integer \| Any\[] \| Struct | `undefined`  | The data to pass to the message, whether it's for [pluralization](/v1/usage/pluralization) (`Integer`), [indexed interpolation](/v1/usage/interpolation#indexed-data) (`Any[]`), or [named interpolation](/v1/usage/interpolation#named-data) (`Struct`). |
| locale      | String            | `""`         | The locale code to get the cache ID from (e.g. `en`, `id`, `ja`, etc.). Leave it empty to get the cache ID from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Integer` (the cache ID)

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// get the cache ID from "hello" key, from "en" locale
var cache_id = i18n_get_cache_id("hello", , "en");

// get the cache ID from "bye" key, from current locale
var cache_id2 = i18n_get_cache_id("bye");

// get the cache ID from "greet" key, from current locale
// using named data interpolation
var cache_id3 = i18n_get_cache_id("greet", {
    name: "John"                    // {name} = "John"
});
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Goodbye World!",
    "greet": "Hello, {name}!"
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
    "greet": "Halo, {name}!"
}
```
::

---

::alert{type="info"}
The message caching isn't available for HTML5 export. So, this function will always return `-1` in HTML5.
::
