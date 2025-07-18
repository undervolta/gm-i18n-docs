# i18n_clear_messages()

The `i18n_clear_messages()` function is used to clear all messages in the specified locale. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_clear_messages(locale, [i18n]);
```

```ts [Signature]
function i18n_clear_messages(
    locale: string | string[] | "all",                
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String \| String\[]  |          | The locale code to clear the messages from. Leave it empty to clear the messages from the **current locale**. You can pass a string for single locale, or an array of string for multiple locales (e.g. `["en", "id", "ja"]`). You can also pass `"all"` to clear the messages from all locales. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// clear all messages from "id" locale
i18n_clear_messages("id");

// clear all messages from the current locale
i18n_clear_messages();
```
::
