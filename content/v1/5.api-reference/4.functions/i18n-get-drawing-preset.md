# i18n_get_drawing_preset()

The `i18n_get_drawing_preset()` function is used to get the all of the drawing presets name from the specified locale.

This function can only be used after the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_drawing_preset([locale], [i18n]);
```

```ts [Signature]
function i18n_get_drawing_preset(
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): string[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String            | `""`         | The locale code to get the drawing preset(s) from (e.g. `en`, `id`, `ja`, etc.). Leave it empty to get the drawing preset(s) from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v0/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String[]`

## Examples

```js [Create Event]
// assume the system is initialized on global variable
// assume you have added the "header", "body", and "button" drawing presets

// get the drawing presets from "en" locale
var presets_en = i18n_get_drawing_preset("en");

// get the drawing presets from current locale
var presets = i18n_get_drawing_preset();
```

---

::alert{type="info"}
If you pass non-existing locale code, this function will return an empty array.
::
