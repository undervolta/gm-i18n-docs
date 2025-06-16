# i18n_get_locales_code()

The `i18n_get_locales_code()` function is used to get the all of the initialized locales code in the **GM-I18n** system.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_locales_code([include_non_init], [i18n]);
```

```ts [Signature]
function i18n_get_locales_code(
    include_non_init?: boolean,     // default = false
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): string[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| include_non_init | Boolean      | `false`      | Include the non-initialized locales code. If you add a locale using `i18n_add_locales()`, and set the `include_non_init` to `true`, this locale code will be included in the returned array.` |
| i18n        | Boolean \| I18n   | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String[]`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// add "my" locale
i18n_add_locales("my");

// get the initialized locales code
var init_locales_code = i18n_get_locales_code();            // "my" locale will not be included

// get the initialized and non-initialized locales code
var all_locales_code = i18n_get_locales_code(true);         // "my" locale will be included
```
