# i18n_unload_messages()

The `i18n_unload_messages()` function is used to unload the messages manually from the specified locale. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_unload_messages(file, [locale], [i18n]);
```

```ts [Signature]
function i18n_unload_messages(
    file: string | string[],
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| file        | String \| String\[] |              | The file path(s) to unload the messages from (e.g. `~/langs/en.json`). Add `~/` before the file path to unload the file from the `working_directory`. You can pass a string for single file, or an array of string for multiple files (e.g. `["~/langs/en2.json", "~/langs/en1.json"]`). |
| locale      | String            | `""`         | The locale code to unload the messages from (e.g. `en`, `id`, `ja`, etc.). Leave it empty to unload the messages from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// unload the messages from "en.json" file, from "en" locale
i18n_unload_messages("~/langs/en.json", "en");

// unload the messages from "en.json" and "en2.json" files, from "en" locale
i18n_unload_messages(["~/langs/en.json", "~/langs/en2.json"], "en");
```
::
