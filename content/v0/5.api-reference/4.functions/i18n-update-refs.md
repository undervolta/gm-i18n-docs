# i18n_update_refs()

The `i18n_update_refs()` function is used to update all references (message and asset) to the current locale. This function is automatically called when you change the locale using the `i18n_set_locale()` function.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_update_refs([type], [i18n]);
```

```ts [Signature]
function i18n_update_refs(
    type?: I18N_REF,                // default = I18N_REF.ALL (update both message and asset)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| type        | I18N_REF          | `I18N_REF.ALL` | The type of reference to update. You can use the [`I18N_REF`](/v0/api-reference/constants#i18n_ref) constants to specify the type of reference you want to update (e.g. `I18N_REF.MESSAGES`, `I18N_REF.ASSETS`, `I18N_REF.ALL`). |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// update all references (message and asset) to the current locale
i18n_update_refs();

// update only message references to the current locale
i18n_update_refs(I18N_REF.MESSAGES);

// update only asset references to the current locale
i18n_update_refs(I18N_REF.ASSETS);
```
