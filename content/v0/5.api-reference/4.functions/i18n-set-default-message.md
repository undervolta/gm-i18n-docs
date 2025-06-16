# i18n_set_default_message()

The `i18n_set_default_message()` function is used to set the default message to be returned when the specified message key is **not** found in the specified locale and fallback locale.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_set_default_message(message, [i18n]);
```

```ts [Signature]
function i18n_set_default_message(
    message: string,
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| message     | String            |              | The default message to be returned. |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// set the default message to "N/A"
i18n_set_default_message("N/A");
```

---

::alert{type="info"}
The default message is only used for **message** fallback. It won't affect the localized asset fallback. <br> <br>

You can also set the default message in the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function by passing the `default_message` in the `options` parameter.
::
