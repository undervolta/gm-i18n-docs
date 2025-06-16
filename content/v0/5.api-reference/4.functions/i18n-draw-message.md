# i18n_draw_message()

The `i18n_draw_message()` function is used to draw a localized text. It's a wrapper for the `draw_text_*` functions with convenient additional features, so you can use it just like the `draw_text_*` functions.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_draw_message(x, y, text, [data], [preset_name], [locale], [i18n]);
```

```ts [Signature]
function i18n_draw_message(
    x: number,
    y: number,
    text: string,
    data?: number | any[],
    preset_name?: string,
    locale?: string,                // default = "" (use the current locale)
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| x           | Real              |              | The `x` position to draw the text (e.g. `room_width / 2`). |
| y           | Real              |              | The `y` position to draw the text (e.g. `room_height / 2`). |
| text        | String            |              | The text to draw. You can pass a normal text, or a message key (start with `@:`) to draw a translated text (e.g. `"Hello World!"`, `my_text`, or `"@:hello"`). |
| data        | Integer \| Any\[] | `undefined`  | The data to pass to the message [pluralization](/v0/usage/pluralization) (`Integer`) or [indexed interpolation](/v0/usage/interpolation) (`Any[]`). |
| preset_name | String            | `""`         | The name of the drawing preset to use (e.g. `header`, `body`, `title`, etc.). Leave it empty to mark it as `dynamic` preset. |
| locale      | String            | `""`         | The locale code to use the drawing preset (and message key if the `text` parameter is a message key). Leave it empty if you don't want to use any drawing preset, or you want the message key to be static. |
| i18n        | Boolean \| Struct.I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// pluralization
plural_index = 1;

// indexed interpolation
player_name = "John";
intp_data = ["GM-I18n", player_name];
apple = {
    cost : 999999,
    resc : "copper coins"
};

// add some drawing presets
i18n_add_drawings(["en", "id"], ["title", "header", "body"], [
    new I18nDrawings(fnNotoSans, fa_center, fa_middle, #FFFFFF, 1.2, 0, 1),
    new I18nDrawings(fnNotoSans, fa_left, fa_middle, #FFFFFF, 1, 0, 1),
    new I18nDrawings(fnNotoSans, fa_left, fa_top, #CCCCCC, 0.8, 0, 1, -1, 700)
]);
```

```js [Draw/Draw GUI Event]
// use the "header" drawing preset from "en" locale
i18n_use_drawing("header", "en");

// and then draw the message
i18n_draw_message(100, 50, "@:hello");          // dynamic message based on "hello" key message
draw_text(100, 50, "Hello, GM-I18n User!");     // static text, the drawing preset still applied

// use `draw_set_*` function if you want
draw_set_font(fnNotoSansBold);
draw_set_halign(fa_right);
draw_set_valign(fa_bottom);
draw_set_color(c_red);
draw_set_alpha(0.5);
i18n_draw_message(100, 50, "@:bye");     // dynamic message based on "bye" key message, but with custom drawing configuration

// draw a dynamic message ("hello" key message) using dynamic "header" drawing preset
i18n_draw_message(100, 50, "@:hello", , "header");

// draw a dynamic message ("bye" key message) using "body" drawing preset on "en" locale
i18n_draw_message(100, 50, "@:bye", , "body", "en");

// draw a static text using the latest drawing preset ("body")
i18n_draw_message(100, 50, "This is a static text");

// draw a static message ("hello" key message) using "title" drawing preset in the current locale
i18n_draw_message(100, 50, "@:hello", , "title");

// draw a static message ("selection" key message) using the latest drawing preset on "id" with static pluralization
i18n_draw_message(100, 50, "@:selection", 0, , "id");

// draw a dynamic message ("selection" key message) using "header" drawing preset with dynamic pluralization based on the `plural_index` value
// bad practice, because the the latest `i18n_draw_message()` function already change the drawing preset to "title"
i18n_draw_message(100, 50, "@:selection", plural_index, "title");

// draw a dynamic message ("welcome" key message) using "body" drawing preset with indexed interpolation based on the `intp_data` value
i18n_draw_message(100, 50, "@:welcome", intp_data, "body");

// draw a static message ("welcome" key message) using the latest drawing preset on "en" with indexed interpolation
i18n_draw_message(100, 50, "@:welcome", [
    "GM-I18n", "Bro"
], , "en");

// draw a dynamic message ("dialog.npc_1" key message) using "header" drawing preset with indexed interpolation
i18n_draw_message(100, 50, "@:dialog.npc_1", [
    apple.cost, apple.resc
], "header");
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Bye World!",
    "selection": "No | Yes",
    "welcome": "Welcome to {0}, {1}!",
    "dialog": {
        "npc_1": "This \"Bad Apple\" is cost {0} {1}!"
    }
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
    "selection": "Tidak | Ya",
    "welcome": "Selamat datang di {0}, {1}!",
    "dialog": {
        "npc_1": "\"Bad Apple\" ini harganya {0} {1}!"
    }
}
```
::

---

::alert{type="info"}
For the detailed example of this function, you can see the [Drawing](/v0/usage/drawing#direct-drawing) section.
::
