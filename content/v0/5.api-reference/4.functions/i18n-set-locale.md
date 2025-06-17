# i18n_set_locale()

The `i18n_set_locale()` function is used to change the current locale used by the **GM-I18n** system.

This function can only be used after the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_set_locale(code, [update_refs], [i18n]);
```

```ts [Signature]
function i18n_set_locale(
    code: string,
    update_refs?: boolean,         // default = true
    i18n?: I18n | boolean          // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| code        | String            |              | The locale code to switch to. |
| update_refs | Boolean           | `true`       | Update all references (message and asset) to the new locale. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v0/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// change the locale to "id"
i18n_set_locale("id");
```
