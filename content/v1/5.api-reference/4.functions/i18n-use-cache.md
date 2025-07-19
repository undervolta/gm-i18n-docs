# i18n_use_cache()

The `i18n_use_cache()` function is used to get the cache value in the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_use_cache(cache_id, [i18n]);
```

```ts [Signature]
function i18n_use_cache(
    cache_id: number,
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): string
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| cache_id    | Integer           |              | The cache ID to get the value from. You can get it from [`i18n_get_cache_id()`](/v1/api-reference/functions/i18n-get-cache-id) function. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String` (the cache value)

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// get the cache ID from "hello" key, from "en" locale
var cache_id = i18n_get_cache_id("hello", , "en");

// get the cache value from the cache ID
var msg = i18n_use_cache(cache_id);         // "" (if the cache is not created yet)
                                            // "Hello World!" (if the cache is already created)
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
The message caching isn't available for HTML5 export. So, this function will always return an empty string (`""`) in HTML5.
::
