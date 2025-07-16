# i18n_get_locales()

The `i18n_get_locales()` function is used to get the all of the initialized locales in the **GM-I18n** system by using [`I18nLocaleInit`](/v0/api-reference/constructors#i18nlocaleinit) struct.

This function can only be used after the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_locales([i18n]);
```

```ts [Signature]
function i18n_get_locales(
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): I18nLocaleInit[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v0/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> [`I18nLocaleInit[]`](/v0/api-reference/constructors#i18nlocaleinit)

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// get the initialized locales
var init_locales = i18n_get_locales();
```

---

::alert{type="info"}
The returned [`I18nLocaleInit`](/v0/api-reference/constructors#i18nlocaleinit) struct contains the `code`, `name`, and `file` property. So, if you want to get the locale code, you can use `init_locales[0].code`, and so on, or just use [`i18n_get_locales_code()`](/v0/api-reference/functions/i18n-get-locales-code) function instead.
::

::alert{type="warning"}
These structs are returned as **reference**. So, if you change the value of the struct, it will affect the original struct in the **GM-I18n** system.
::
