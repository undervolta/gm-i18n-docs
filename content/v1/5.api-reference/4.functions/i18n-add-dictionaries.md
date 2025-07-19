# i18n_add_dictionaries()

The `i18n_add_dictionaries()` function is used to add dictionaries to the specified locale. 

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_add_dictionaries(locale, data, [i18n]);
```

```ts [Signature]
function i18n_add_dictionaries(
    locale: string,
    data: [string, string] | [string, string][],    // [key, value] or [[key1, value1], [key2, value2], ...]
    i18n?: I18n | boolean                           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| locale      | String            |              | The locale to add the dictionaries to (e.g. `"en"`, `"id"`, `"ja"`, etc.). |
| data        | \[String, String] \| \[String, String]\[]           |              | The dictionaries to add with \["key", value] pair, or array of \["key", value] pair (e.g. `["apple", "apel"]` or `[["apple", "apel"], ["banana", "pisang"], ["orange", "jeruk"]]`). |
| i18n        | Boolean \| I18n | `false`      | The [`I18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

```js [Create Event]
// assume the system is initialized on global variable

// add "apple" -> "apel" dictionary to "id" locale
i18n_add_dictionaries("id", ["apple", "apel"]); 

// add more dictionaries to "id" locale
i18n_add_dictionaries("id", [
    ["banana", "pisang"],
    ["orange", "jeruk"],
    ["one", "satu"],
    ["two", "dua"],
    ["three", "tiga"]
]);

// add dictionaries to "ja" locale
i18n_add_dictionaries("ja", [
    ["apple", "リンゴ"],
    ["banana", "バナナ"],
    ["orange", "オレンジ"],
    ["one", "一"],
    ["two", "二"],
    ["three", "三"]
]);

// you can add number as well
i18n_add_dictionaries("ar", [
    ["1", "١"],
    ["2", "٢"],
    ["3", "٣"],
    ["4", "٤"],
    ["5", "٥"]
]);

// you can also add dictionaries for the default locale (en), or variant of it
i18n_add_dictionaries("en_GB", [
    ["soccer", "football"],
    ["cookie", "biscuit"],
    ["fries", "chips"]
])

// key-value pair is also supported
i18n_add_dictionaries("en", [
    ["hello", "Hello World!"],
    ["btn.cancel", "Cancel"],
    ["btn.yes", "Yes"],
    ["btn.no", "No"]
]);

// you can make it as a glossary-like dictionaries
i18n_add_dictionaries("en", [
    ["Cure", "A beginner skill of a healer that heals a single target."],
    ["Will of the Adventurer", "A skill that increases the user's attack power by 10% for 30 seconds."],
    ["Fireball", "A powerful fire spell that deals damage to all enemies in a small area."],
    ["Potion", "A consumable item that restores 50 HP when used."],
    ["Elixir", "A consumable item that restores 100 MP when used."],
    ["Mana Potion", "A consumable item that restores 50 MP when used."],
    ["Phoenix Down", "An item that revives a fallen ally with 50% HP."],
    ["Ether", "An item that restores 30 MP to an ally."]
]);
```
