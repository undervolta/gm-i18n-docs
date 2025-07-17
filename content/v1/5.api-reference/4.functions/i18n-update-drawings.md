# i18n_update_drawings()

The `i18n_update_drawings()` function is used to update the drawing preset properties used by the [`i18n_draw_message()`](/v1/api-reference/functions/i18n-draw-message) function. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_update_drawings(preset_name, data, [locale], [i18n]);
```

```ts [Signature]
function i18n_update_drawings(
    preset_name: string,
    data: [string, (number | Font)] | [string, (number | Font)][] | { [key: string]: (number | Font); },
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| preset_name | String            |              | The name of the drawing preset to update (e.g. `header`, `body`, `title`, etc.). |
| data        | \[String, Real \| Font] \| \[String, Real \| Font]\[] \| Struct |  | The data to update the drawing preset with. You can pass a single \[key, value] pair, an array of \[key, value] pair, or a struct with `{ key: value }` pair. See the [I18N_DRAWING](/v1/api-reference/constructors#i18ndrawings) interface for the list of available keys. |
| locale      | String            | `""`         | The locale code to update the drawing preset. Leave it empty to update the drawing preset for all locales. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable
// assume you have added the "header", "body", and "button" drawing presets

text_alpha = 1;
text_color = c_yellow;

// update the font of "header" drawing preset in "en" locale
i18n_update_drawings("header", ["font", fnNotoSansBold], "en");

// update the font and color of "body" drawing preset in current locale
i18n_update_drawings("body", [
    ["font", fnNotoSansBold], 
    ["color", c_red]
]);

// update the font and color of "button" drawing preset in "id" locale
i18n_update_drawings("button", { 
    font: fnNotoSansBold, 
    color: c_red 
}, "id");
```

```js [Step Event]
// if you want to update in event that updated every step, you can do it like this 
// use array of [key, value] pair, which value can be a variable
// update the text alpha of "header" drawing preset in current locale
i18n_update_drawings("header", ["alpha", text_alpha]);

// you can update multiple properties at once
i18n_update_drawings("header", [
    ["alpha", text_alpha],
    ["color", text_color]
]);

// bad practice, don't do this! (using struct in event that updated every step)
i18n_update_drawings("header", { alpha: text_alpha });
```

```js [Key Pressed - Space]
// in event that updated once, using struct is fine
i18n_update_drawings("header", ["alpha", text_alpha]);

i18n_update_drawings("header", [
    ["alpha", text_alpha],
    ["color", text_color]
]);

i18n_update_drawings("header", { alpha: text_alpha });
```
::

---

::alert{type="warning"}
**Don't** pass a struct to the `data` parameter in event that updated every step (such as `Step Event`, `Draw Event`, etc.). It may cause a performance issue.
::
