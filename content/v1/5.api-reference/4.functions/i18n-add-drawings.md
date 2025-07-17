# i18n_add_drawings()

The `i18n_add_drawings()` function is used to add drawing presets to the specified locale(s). 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_add_drawings(locale, preset_name, data, [use_ref], [i18n]);
```

```ts [Signature]
function i18n_add_drawings(
    locale: string | string[],
    preset_name: string | string[],
    data: I18nDrawings | I18nDrawings[],
    use_ref?: boolean,            // default = true
    i18n?: I18n | boolean         // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String \| String\[] |              | The locale code to add the drawing preset(s) (e.g. `en`, `id`, `ja`, etc.). You can pass a string for single locale, or an array of string for multiple locales (e.g. `["en", "id", "ja"]`). |
| preset_name | String \| String\[] |              | The name of the drawing preset(s) (e.g. `header`, `body`, `title`, etc.). You can pass a string for single preset, or an array of string for multiple presets (e.g. `["header", "body", "title"]`). |
| data        | I18nDrawings \| I18nDrawings\[] |  | The drawing preset data. You can pass a single [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) struct for single preset, or an array of [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) struct for multiple presets. |
| use_ref     | Boolean           | `true`       | Use the first I18nDrawings struct as a reference, instead of creating a new one. Only works if the `locale` parameter is an array. Recommended to be `true` if you want to use the same drawing preset for multiple locales. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// add "header" drawing preset to "en" locale
i18n_add_drawings("en", "header", 
    new I18nDrawings(fnNotoSans, fa_left, fa_middle, #FFFFFF, 1, 0, 1)
);

// add "header" drawing preset to "en" and "id" locales
i18n_add_drawings(["en", "id"], "header", [
    new I18nDrawings(fnNotoSans, fa_left, fa_middle, #FFFFFF, 1, 0, 1)
]);

// same, but the "en" and "id" won't have the same struct reference
// only use this if you want to modify the drawing preset for each locale
// otherwise, keep the `use_ref` to `true`
i18n_add_drawings(["en", "id"], "header", [
    new I18nDrawings(fnNotoSans, fa_left, fa_middle, #FFFFFF, 1, 0, 1)
], false);

// add "header" and "body" drawing presets to "ja" locale
i18n_add_drawings("ja", ["header", "body"], [
    new I18nDrawings(global.font_ja, fa_left, fa_middle, #FFFFFF, 1, 0, 1),
    new I18nDrawings(global.font_ja, fa_left, fa_top, #CCCCCC, 0.8, 0, 1, -1, 700)
]);

// add "title", "header", and "body" drawing presets to "en", "id", "my", and "fr" locales
// you're recommended to use this method if you want to use the same drawing preset for multiple locales
// the drawing presets only created once in "en" locale, and the rest of the locale will just reference the "en" locale
i18n_add_drawings(["en", "id", "my", "fr"], ["title", "header", "body"], [
    new I18nDrawings(fnNotoSans, fa_center, fa_middle, #FFFFFF, 1.2, 0, 1),
    new I18nDrawings(fnNotoSans, fa_left, fa_middle, #FFFFFF, 1, 0, 1),
    new I18nDrawings(fnNotoSans, fa_left, fa_top, #CCCCCC, 0.8, 0, 1, -1, 700)
]);
```
