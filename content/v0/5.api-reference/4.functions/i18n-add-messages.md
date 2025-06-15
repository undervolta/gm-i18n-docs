# i18n_add_messages()

The `i18n_add_messages()` function is used to add messages to the specified locale. This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_add_messages(locale, data, [i18n]);
```

```ts [Signature]
function i18n_add_messages(
    locale: string,
    data: { 
        [key: string]: string 
    },
    i18n?: I18n | boolean         // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String            |              | The locale to add the messages to (e.g. `en`, `id`, `ja`, etc.). |
| data        | Struct            |              | The messages to add. The `key` is the message key, and the `value` is the message value (e.g. `{ hello: "Hello World!" }`). |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// add messages to "en" locale
i18n_add_messages("en", {
    hello: "Hello World!",
    bye: "Goodbye World!",
    welcome: "Welcome to {0}, {1}!",
    dialog: {
        npc_1: "I have {count1} {item1}{suffix1}. Do you want to trade them with my {count2} bamboos, {name}?"
    }
});

// add messages to "id" locale
i18n_add_messages("id", {
    hello: "Halo Dunia!",
    bye: "Selamat Tinggal!",
    welcome: "Selamat datang di {0}, {1}!",
    dialog: {
        npc_1: "Aku punya {count1} {item1}. Mau tukeran sama aku dengan {count2} bambu, {name}?"
    }
});
```
