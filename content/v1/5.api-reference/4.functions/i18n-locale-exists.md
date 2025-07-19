# i18n_locale_exists()

The `i18n_locale_exists()` function is used to check if the specified locale is already initialized or added in the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_locale_exists(locale, [i18n]);
```

```ts [Signature]
function i18n_locale_exists(
    locale: string,
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): boolean
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String            |              | The locale code to check (e.g. `"en"`, `"id"`, `"ja"`, etc.). |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Boolean`

## Examples

```js [Create Event]
// assume the system is initialized on global variable
// and you've set "en" and "id" as the initialized locales

// check if "en" locale is available
var is_en_exists = i18n_locale_exists("en");    // true

// check if "id" locale is available
var is_id_exists = i18n_locale_exists("id");    // true

// check if "ja" locale is available
var is_ja_exists = i18n_locale_exists("ja");    // false

// add "ja" locale
i18n_add_locales("ja");

// check again if "ja" locale is available
is_ja_exists = i18n_locale_exists("ja");        // true
```
