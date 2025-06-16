# i18n_get_messages()

The `i18n_get_messages()` function is used to get the localized message from the **GM-I18n** system.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_messages(key, [data], [locale], [i18n]);
```

```ts [Signature]
function i18n_get_messages(
    key: string | string[],
    data?: number | any[] | { [key: string]: any },
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): string | string[]
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| key         | String \| String\[] |              | The message key(s) to get (e.g. `hello`, `bye`, `long_text`, etc.). You can pass a string for single message, or an array of string for multiple messages (e.g. `["hello", "bye", "long_text"]`). |
| data        | Integer \| Any\[] \| Struct | `undefined`  | The data to pass to the message [pluralization](/v0/usage/pluralization) (`Integer`), [indexed interpolation](/v0/usage/interpolation#indexed-data) (`Any[]`), or [named interpolation](/v0/usage/interpolation#named-data) (`Struct`). |
| locale      | String            | `""`         | The locale code to get the message from (e.g. `en`, `id`, `ja`, etc.). Leave it empty to get the message from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String` or `String[]`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// get a message from "hello" key, from "en" locale
msg = i18n_get_messages("hello", , "en");       // "Hello World!"

// get a message from "bye" key, from current locale
msg = i18n_get_messages("bye");               // "Goodbye World!" (if the current locale is "en")

// get multiple messages from "hello" and "bye" key, from "id" locale
msg = i18n_get_messages(["hello", "bye"], , "id");      // ["Halo Dunia!", "Sampai jumpa Dunia!"]

// get a message from "greet" key, from current locale
// using named data interpolation
msg = i18n_get_messages("greet", {
    name: "John"                    // {name} = "John"
});                                 // "Hello, John!" (if the current locale is "en")

// get a message from "greet_2" key, from "id" locale
// using indexed data interpolation
player_name = "John";
msg = i18n_get_messages("greet_2", [
    "memancing", player_name        // {0} = "memancing", {1} = player_name = "John"
], "id");                           // "Hari yang cerah untuk memancing, 'kan, John?"

// get a message from "shop.has_apple" key, from current locale
// using static pluralization
apple_count = 0;
msg = i18n_get_messages("shop.has_apple", {
    plural: 0,                                  // use the first form (index 0) (static)
    plural_value: apple_count                   // interpolate the {plural_value} placeholder
});                                             // "I don't have any apple" (if the current locale is "en")

// get multiple message from "greet" and "shop.greet" keys, from "en" locale
// using named data interpolation
msg = i18n_get_messages(["greet", "shop.greet"], {
    name: "John",                                   // {name} = "John"
    shop_name: "The Chosen Apple"                   // {shop_name} = "The Chosen Apple"
}, "en");                                           // ["Hello, John!", "Welcome to The Chosen Apple, John!"]
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
The `data` parameter is optional. You can leave it empty if you don't want to interpolate the message. <br> <br>

You can pass an array of keys to the `key` parameter to get multiple messages at once. The function will return an array of messages. <br> <br>

If you pass a data to the `data` parameter and you pass an array of keys to the `key` parameter, the data will be **applied to all of the messages**. <br> <br>

For the detailed usage of this function, you can see the [Messages](/v0/usage/messages), [Interpolation](/v0/usage/interpolation), and [Pluralization](/v0/usage/pluralization) section.
::
