# i18n_get_drawings()

The `i18n_get_drawings()` function is used to get the drawing preset(s) struct from the specified locale. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_drawings(preset_name, [locale], [i18n]);
```

```ts [Signature]
function i18n_get_drawings(
    preset_name: string | string[],
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): I18nDrawings | I18nDrawings[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| preset_name | String \| String\[] |              | The name of the drawing preset(s) to get (e.g. `"header"`, `"body"`, `"title"`, etc.). You can pass a string for single preset, or an array of string for multiple presets (e.g. `["header", "body", "title"]`). |
| locale      | String            | `""`         | The locale code to get the drawing preset(s) from (e.g. `"en"`, `"id"`, `"ja"`, etc.). Leave it empty to get the drawing preset(s) from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) or [`I18nDrawings[]`](/v1/api-reference/constructors#i18ndrawings)

## Examples

```js [Create Event]
// assume the system is initialized on global variable
// assume you have added the "header", "body", and "button" drawing presets

// get the "header" drawing preset from "en" locale
var header_en = i18n_get_drawings("header", "en");

// get the "body" drawing preset from current locale
var body = i18n_get_drawings("body");

// get the "body" and "button" drawing presets from "id" locale
var body_button_id = i18n_get_drawings(["body", "button"], "id");
```

---

::alert{type="info"}
If you pass non-existing locale code, this function will return empty [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) struct. <br> <br>

If you pass non-existing drawing preset name in current locale, the system will check the preset name in the fallback locale. If it's still not found, it will return empty [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) struct.
::

::alert{type="warning"}
These structs are returned as **reference**. So, if you change the value of the struct, it will affect the original struct in the **GM-I18n** system.
::
