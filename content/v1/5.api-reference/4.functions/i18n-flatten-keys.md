# i18n_flatten_keys()

The `i18n_flatten_keys()` function is used to flatten the nested message keys into a single-level key.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_flatten_keys(data_struct, [locale], [i18n], [prefix], [direct_write]);
```

```ts [Signature]
function i18n_flatten_keys(
    data_struct: { 
        [key: string]: string; 
    },
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean,          // default = false (using global i18n struct)
    prefix?: string,                // default = "" (no prefix)
    direct_write?: boolean          // default = true (write the flattened keys to the i18n struct)
): void | string[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| data_struct | Struct            |              | The data struct to flatten the keys. The `key` is the message key, and the `value` is the message value (e.g. `{ hello: "Hello World!" }`). |
| locale      | String            | `""`         | The locale code to flatten the keys for. Leave it empty to flatten the keys for the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |
| prefix      | String            | `""`         | **(INTERNAL USE ONLY)** &nbsp; The prefix to add to the flattened keys. |
| direct_write| Boolean           | `true`       | Write the flattened keys to the i18n struct. If `false`, the function will return the flattened keys instead (in array of string). |

## Returns

> `Void` or `String[]` (if `direct_write` is `false`)

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// create a nested data struct
var data = {
    hello: "Hello World!",
    bye: "Goodbye World!",
    greet: {
        morning: "Good Morning!",
        afternoon: "Good Afternoon!",
        evening: "Good Evening!"
    }
};

// flatten the keys
i18n_flatten_keys(data, "en");          // add the messages in the data struct to `en` locale

// flatten the keys and return the flattened keys
var keys = i18n_flatten_keys(data, "en", , , false);     // ["hello", "bye", "greet.morning", "greet.afternoon", "greet.evening"]
```
