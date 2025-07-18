# i18n_get_ref_asset()

:badge[Internal]{type="warning"} The `i18n_get_ref_asset()` function is used to track and get the valid reference you created using the [`i18n_create_ref_asset()`](/v1/api-reference/functions/i18n-create-ref-asset) function. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_ref_asset(index, [i18n]);
```

```ts [Signature]
function i18n_get_ref_asset(
    index: number,
    i18n?: I18n | boolean               // default = false (using global i18n struct)
): Instance | Struct | "global"
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| index       | Number            |              | The index of the reference you want to get. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Instance`, `Struct`, or `"global"`

---

::alert{type="warning"}
**This function is used internally by the** [`i18n_update_refs()`](/v1/api-reference/functions/i18n-update-refs) **function. You don't need to use this function directly, unless you know what you're doing.**
::
