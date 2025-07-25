# i18n_get_locales_name()

The `i18n_get_locales_name()` function is used to get the all of the initialized locales name in the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_locales_name([i18n]);
```

```ts [Signature]
function i18n_get_locales_name(
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): string[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| i18n        | Boolean \| I18n   | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String[]`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// get the initialized locales name
var init_locales_name = i18n_get_locales_name();
```
