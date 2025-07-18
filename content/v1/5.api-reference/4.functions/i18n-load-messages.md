# i18n_load_messages()

The `i18n_load_messages()` function is used to load the messages manually from the specified locale file. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_load_messages(file, [locale], [i18n]);
```

```ts [Signature]
function i18n_load_messages(
    file: string | string[],
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| file        | String \| String\[] |              | The file path(s) to load the messages from (e.g. `"~/langs/en.json"`). Add `~/` before the file path to load the file from the `working_directory`. You can pass a string for single file, or an array of string for multiple files (e.g. `["~/langs/en2.json", "~/langs/en1.json"]`). |
| locale      | String            | `""`         | The locale code to load the messages to (e.g. `"en"`, `"id"`, `"ja"`, etc.). Leave it empty to load the messages to the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// load the messages from "en.json" file, to "en" locale
i18n_load_messages("~/langs/en.json", "en");

// load the messages from "en.json" and "en2.json" files, to "en" locale
i18n_load_messages(["~/langs/en.json", "~/langs/en2.json"], "en");

// load the messages from "en.json" file, to "en" locale, using custom i18n struct
i18n_load_messages("~/langs/en.json", "en", my_i18n_struct);
```
::
