# i18n_use_drawing()

The `i18n_use_drawing()` function is used to change the drawing preset used. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_use_drawing(preset_name, [locale], [i18n]);
```

```ts [Signature]
function i18n_use_drawing(
    preset_name: string,
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| preset_name | String            |              | The name of the drawing preset to use (e.g. `header`, `body`, `title`, etc.). |
| locale      | String            | `""`         | The locale code to use the drawing preset (e.g. `en`, `id`, `ja`, etc.). Leave it empty to mark it as `dynamic` locale. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> [`I18nDrawings`](/v1/api-reference/constructors#i18ndrawings) or `Void` (if the drawing preset is not found)

## Examples

```js [Draw/Draw GUI Event]
// use the "header" drawing preset from "en" locale
i18n_use_drawing("header", "en");

// use the "body" drawing preset from "id" locale
i18n_use_drawing("body", "id");

// use the "header" drawing preset from "ja" locale in instance-scoped i18n struct
i18n_use_drawing("header", "ja", i18n);

// use the "body" drawing preset for dynamic locale
i18n_use_drawing("body");
```

::alert{type="info"}
For the detailed example of this function, you can see the [Drawing](/v1/usage/drawing#i18n_use_drawing) section.
::
