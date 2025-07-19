# i18n_get_drawings_data()

The `i18n_get_drawings_data()` function is used to get the specific data from the drawing preset.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_drawings_data(preset_name, type, [locale], [i18n]);
```

```ts [Signature]
function i18n_get_drawings_data(
    preset_name: string,
    type: I18N_DRAWING,             // I18N_DRAWING enum
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): number | Font | undefined
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| preset_name | String            |              | The name of the drawing preset to get the data from (e.g. `"header"`, `"body"`, `"title"`, etc.). |
| type        | I18N_DRAWING      |              | The type of data to get from the drawing preset (e.g. `I18N_DRAWING.FONT`, `I18N_DRAWING.SEP`, etc.). See the [I18N_DRAWING](/v1/api-reference/constants#i18n_drawing) constant for the list of available types. |
| locale      | String            | `""`         | The locale code to get the drawing preset from (e.g. `"en"`, `"id"`, `"ja"`, etc.). Leave it empty to get the drawing preset from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Real` or `Font` or `undefined`

## Examples

```js [Create Event]
// assume the system is initialized on global variable
// assume you have added the "header", "body", and "button" drawing presets

// get the font from "header" drawing preset in "en" locale
var font = i18n_get_drawings_data("header", I18N_DRAWING.FONT, "en");

// get the text separation from "body" drawing preset in current locale
var sep = i18n_get_drawings_data("body", I18N_DRAWING.SEP);

// get the text width from "button" drawing preset in "id" locale
var width = i18n_get_drawings_data("button", I18N_DRAWING.WIDTH, "id");
```

---

::alert{type="info"}
If you pass non-existing drawing preset name in current locale, the system will check the preset name in the fallback locale. If it's still not found, it will return `undefined`.
::
