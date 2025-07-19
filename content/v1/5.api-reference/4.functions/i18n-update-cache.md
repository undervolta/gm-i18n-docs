# i18n_update_cache()

The `i18n_update_cache()` function is used to update the cache value in the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_update_cache(cache_id, [value], [i18n]);
```

```ts [Signature]
function i18n_update_cache(
    cache_id: number,
    value?: string,                 // default = "" (get the message from the stored key and data)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| cache_id    | Integer           |              | The cache ID to update. You can get it from [`i18n_get_cache_id()`](/v1/api-reference/functions/i18n-get-cache-id) function. |
| value       | String            | `""`         | The new value to store in the cache. Leave it empty to get the message from based on the stored `key` and `data` in the cache. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create a cache for "hello" key, from "en" locale
i18n_create_cache("hello", , "en");                     // "Hello World!"

// get the cache ID from "hello" key, from "en" locale
var cache_id = i18n_get_cache_id("hello", , "en");

// update the cache value
i18n_update_cache(cache_id, "Hello, GM-I18n User!");    // "Hello, GM-I18n User!"
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
The message caching isn't available for HTML5 export. So, this function will do nothing in HTML5.
::
