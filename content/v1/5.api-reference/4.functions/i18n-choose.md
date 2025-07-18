# i18n_choose()

The `i18n_choose()` function is used to choose the correct message based on the locale code parameter.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_choose(data, [locale], [single_use], [i18n]);
```

```ts [Signature]
function i18n_choose(
    data: {
        [locale_code: string]: any;
    },
    locale?: string,                // default = "" (use the current locale)
    single_use?: boolean,           // default = false
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): any
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| data        | Struct            |              | The data to choose from. The `key` is the locale code, and the `value` is the data to return (e.g. `{ en: "Hello World!", id: "Halo Dunia!" }`). |
| locale      | String            | `""`         | The locale code to choose the data from. Leave it empty to use the **current locale**. |
| single_use  | Boolean           | `false`      | If `true`, the function will delete the struct after selecting the data. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` I18n struct. |

## Returns

> `Any` (the data from the specified locale code)

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// choose the correct message based on the locale
var msg = i18n_choose({
    en: "Hello World!",
    id: "Halo Dunia!",
    ja: "こんにちは、世界！"
}, "en");                   // "Hello World!"

// choose the correct message based on the current locale
var msg = i18n_choose({
    en: "Hello World!",
    id: "Halo Dunia!",
    ja: "こんにちは、世界！"
});                         // "Hello World!" (if the current locale is "en")

// delete the struct after selecting the data
var msg = i18n_choose({
    en: sprHelloEn,
    id: sprHelloId,
    ja: sprHelloJa
}, , true);                 // sprHelloEn sprite (if the current locale is "en")
```

---

::alert{type="info"}
The fallback feature is working in this function. So, if you don't set the data for the current locale, it will try to find the data in the fallback locale.
::

::alert{type="warning"}
You need to set the default locale code in the `data` parameter. So, if your default locale is `en`, you need to set the `en` key in the `data` parameter.
::
