# i18n_create_cache()

The `i18n_create_cache()` function is used to create a new cache in the **GM-I18n** system. This function is automatically called when you use the [`i18n_get_messages()`](/v1/api-reference/functions/i18n-get-messages), [`i18n_create_ref_message()`](/v1/api-reference/functions/i18n-create-ref-message), and [`i18n_draw_message()`](/v1/api-reference/functions/i18n-draw-message) functions, so you don't need to call this function manually.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_create_cache(key, [data], [locale], [value], [i18n]);
```

```ts [Signature]
function i18n_create_cache(
    key: string,
    data?: number | any[] | { 
        [key: string]: any; 
    },
    locale?: string,                // default = "" (use the current locale)
    value?: string,                 // default = "" (get the message based on the key and data)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| key         | String            |              | The message key to create the cache for (e.g. `"hello"`, `"bye"`, `"long_text"`, etc.). |
| data        | Integer \| Any\[] \| Struct | `undefined` | The data to pass to the message. You can pass an integer for pluralization, an array for indexed data interpolation, or a struct for named data interpolation (e.g. `1`, `["Hello", "World"]`, `{ name: "John" }`). |
| locale      | String            | `""`         | The locale code to create the cache for (e.g. `"en"`, `"id"`, `"ja"`, etc.). Leave it empty to create the cache for the **current locale**. |
| value       | String            | `""`         | The value to store in the cache. Leave it empty to get the message from based on the `key` and `data` parameters. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create a cache for "hello" key, from "en" locale
i18n_create_cache("hello", , "en");

// create a cache for "bye" key, from current locale
i18n_create_cache("bye");

// create a cache for "greet" key, from current locale
// using named data interpolation
i18n_create_cache("greet", {
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
The message caching isn't available for HTML5 export. So, this function will do nothing in HTML5.
::
