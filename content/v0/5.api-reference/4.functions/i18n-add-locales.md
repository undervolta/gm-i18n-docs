# i18n_add_locales()

The `i18n_add_locales()` function is used to add new locales to the **GM-I18n** system with empty data.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_add_locales(code, [i18n]);
```

```ts [Signature]
function i18n_add_locales(
    code: string | string[],
    i18n?: I18n | boolean         // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| code        | String \| String\[] |              | The locale code(s) to add (e.g. `en`, `id`, `ja`, etc.). You can pass a string for single locale, or an array of string for multiple locales (e.g. `["en", "id", "ja"]`). |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// add "my" locale to the global i18n struct
i18n_add_locales("my");

// add "my" and "fr" locales to the global i18n struct
i18n_add_locales(["my", "fr"]);

// ad "cn", "jp", and "kr" locales to instance-scoped i18n
// assume you have created the i18n struct in instance variable
i18n_add_locales(["cn", "jp", "kr"], i18n);
```
