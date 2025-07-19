# i18n_get_cache_id_from_ref()

The `i18n_get_cache_id_from_ref()` function is used to get the cache ID from the reference you created using the [`i18n_create_ref_message()`](/v1/api-reference/functions/i18n-create-ref-message) function. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_cache_id_from_ref(var_name, [ref], [locale], [i18n]);
```

```ts [Signature]
function i18n_get_cache_id_from_ref(
    var_name: string,
    ref?: "global" | Instance | Object,
    locale?: string,                        // default = "" (use the current locale)
    i18n?: I18n | boolean                   // default = false (using global i18n struct)
): number
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| var_name    | String            |              | Variable name based on the `var_name` parameter used in [`i18n_create_ref_message()`](/v1/api-reference/functions/i18n-create-ref-message) function (e.g. `global.my_obj.my_msg`, `my_obj.my_msg`, `my_arr.0`, `my_struct.my_msg`, etc.). |
| ref         | String \| Instance \| Object | `undefined` | Reference name or instance id based on the ref in [`i18n_create_ref_message()`](/v1/api-reference/functions/i18n-create-ref-message) function. Recommended to pass `"global"` if the reference is created in global variable, or instance `id` if the reference is created in an instance. |
| locale      | String            | `""`         | The locale code to get the cache ID from (e.g. `"en"`, `"id"`, `"ja"`, etc.). Leave it empty to get the cache ID from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Integer` (the cache ID)

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create some message references
global.my_msg = i18n_create_ref_message("global.my_msg", "hello");      

my_arr = [
    i18n_create_ref_message("my_arr.0", "bye")
];

// get the cache ID from "global.my_msg" reference, from "en" locale
var cache_id = i18n_get_cache_id_from_ref("global.my_msg", "global", "en");

// get the cache ID from "my_arr.0" reference, from current locale
var cache_id2 = i18n_get_cache_id_from_ref("my_arr.0", instance_id_get(self));
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Goodbye World!",
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
}
```
::

---

::alert{type="info"}
The message caching isn't available for HTML5 export. So, this function will always return `-1` in HTML5.
::
