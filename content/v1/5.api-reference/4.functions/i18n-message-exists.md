# i18n_message_exists()

The `i18n_message_exists()` function is used to check if the specified **message key** is already added in the specified locale.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_message_exists(key, [locale], [i18n]);
```

```ts [Signature]
function i18n_message_exists(
    key: string,
    locale: string,                 // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): boolean
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| key         | String            |              | The message key to check (e.g. `hello`, `bye`, `long_text`, etc.). |
| locale      | String            | `""`         | The locale code to check (e.g. `en`, `id`, `ja`, etc.). Leave it empty to check the message key in the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Boolean`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable
// and you've added "hello" and "bye" messages to "en" and "id" locale

// check if "hello" message is available in "id" locale
var is_hello_exists = i18n_message_exists("hello", "id");       // true

// check if "bye" message is available in current locale
var is_bye_exists = i18n_message_exists("bye");                 // true

// check if "welcome" message is available in "en" locale
var is_welcome_exists = i18n_message_exists("welcome", "en");   // false
```
::
