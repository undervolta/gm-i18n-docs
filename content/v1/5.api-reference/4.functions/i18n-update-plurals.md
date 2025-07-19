# i18n_update_plurals()

The `i18n_update_plurals()` function is used to update the plural value and the used plural form in the message reference created by using the `i18n_create_ref_message()` function.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_update_plurals(var_name, value, [update_refs], [i18n]);
```

```ts [Signature]
function i18n_update_plurals(
    var_name: string,
    value: number,
    update_refs?: boolean,         // default = false
    i18n?: I18n | boolean          // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| var_name    | String            |              | The name of the variable that store the message reference created by [`i18n_create_ref_message()`](/v1/api-reference/functions/i18n-create-ref-message) function (e.g. `global.my_obj.my_msg`, `my_obj.my_msg`, `my_arr.0`, `my_struct.my_msg`, etc.). |
| value       | Real              |              | The new plural value (e.g. `0`, `10`, `213`, etc.). |
| update_refs | Boolean           | `false`      | Update all references (message and asset) to the new plural value and the used plural form. |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable, and the locale is "en"

apple_count = 0;

// create a message references with pluralization
ref_msg = i18n_create_ref_message("ref_msg", "shop.has_apple", {
    plural: function(plural_value) {
        switch (i18n_get_locale()) {
            case "en":
                return (plural_value <= 0 ? 0 : (plural_value == 1 ? 1 : 2));
            case "id":
                return (plural_value <= 0 ? 0 : 1);
        }
    },
    plural_value: 0
});
```

```js [Key Pressed - Up]
// increase the apple count
apple_count++;

// update the plural value in the message reference
i18n_update_plurals("ref_msg", apple_count, true);
```

```js [Key Pressed - Down]
// decrease the apple count
apple_count--;

// update the plural value in the message reference
i18n_update_plurals("ref_msg", apple_count, true);
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Goodbye World!",
    "greet": "Hello, {name}!",
    "greet_2": "What a nice day to {0}, right, {1}?",
    "shop": {
        "greet": "Welcome to {shop_name}, {name}!",
        "has_apple": "I don't have any apple. | I have 1 apple. | I have {plural_value} apples."
    }
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
    "greet": "Halo, {name}!",
    "greet_2": "Hari yang cerah untuk {0}, 'kan, {1}?",
    "shop": {
        "greet": "Selamat datang di {shop_name}, {name}!",
        "has_apple": "Aku tidak punya apel. | Aku punya {plural_value} apel."
    }
}
```
::

---

::alert{type="info"}
For the detailed example of this function, you can see the [Pluralization](/v1/usage/pluralization#using-message-reference) section.
::

::alert{type="warning"}
You **need** to use named data for pluralization, with `plural` (for the pluralization rule) and `plural_value` (for the value to be passed to the pluralization rule) key. You **can't** use the indexed data for pluralization. See the [Interpolation](/v1/usage/interpolation) section for more information.
::
