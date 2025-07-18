# i18n_remove_messages()

The `i18n_remove_messages()` function is used to remove messages from the specified locale. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_remove_messages(key, [locale], [i18n]);
```

```ts [Signature]
function i18n_remove_messages(
    key: string | string[],
    locale?: string | string[] | "all",     // default = "" (use the current locale)
    i18n?: I18n | boolean                   // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| key         | String \| String\[] |              | The message key(s) to remove (e.g. `"hello"`, `"bye"`, `"long_text"`, etc.). You can pass a string for single message, or an array of string for multiple messages (e.g. `["hello", "bye", "long_text"]`). |
| locale      | String \| String\[] \| "all" | `""`         | The locale code(s) to remove the message from. You can pass a string for single locale, or an array of string for multiple locales (e.g. `["en", "id", "ja"]`). You can also pass `"all"` to remove the message from all locales. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// remove "hello" message from "en" locale
i18n_remove_messages("hello", "en");

// remove "bye" and "long_text" messages from "id" locale
i18n_remove_messages(["bye", "long_text"], "id");

// remove "hello" message from all locales
i18n_remove_messages("hello", "all");
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Goodbye World!",
    "long_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
    "long_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}
```
::
