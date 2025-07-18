# i18n_clear_cache()

The `i18n_clear_cache()` function is used to clear the cache in the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_clear_cache([i18n]);
```

```ts [Signature]
function i18n_clear_cache(
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create some caches
i18n_create_cache("hello", , "en");     // "Hello World!"

i18n_create_cache("bye", , "en");       // "Goodbye World!"

i18n_create_cache("greet", {            // "Halo, John!"
    name: "John"
}, "id");
```

```js [Room End Event]
// clear all caches
i18n_clear_cache();
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
It's recommended to only clear the cache when you're sure that you won't need the cached message anymore. So, the suitable events to clear the cache are `Clean Up Event`, `Room End Event`, `Game End Event`, or other events that you know that the caches won't be used again. <br> <br>

The cache is automatically cleared when the i18n system is destroyed, so you don't have to worry about memory leaks. <br> <br>

The message caching isn't available for HTML5 export. So, this function will do nothing in HTML5.
::

::alert{type="danger"}
**Don't use this function on events that updated every step (such as `Step Event`, `Draw Event`, etc.)! It will cause a performance issue and there's no point to use the message caching feature if you do that.**
::
