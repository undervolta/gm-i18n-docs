# i18n_get_message_from_ref()

The `i18n_get_message_from_ref()` function is used to get the message from the reference you created using the [`i18n_create_ref_message()`](/v0/api-reference/functions/i18n-create-ref-message) function. 

This function can only be used after the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_message_from_ref(var_name, ref, [locale], [i18n]);
```

```ts [Signature]
function i18n_get_message_from_ref(
    var_name: string,
    ref: "global" | Instance | Object,
    locale?: string,                    // default = "" (use the current locale)
    i18n?: I18n | boolean               // default = false (using global i18n struct)
): string
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| var_name    | String            |              | Variable name based on the `var_name` parameter used in [`i18n_create_ref_message()`](/v0/api-reference/functions/i18n-create-ref-message) function (e.g. `global.my_obj.my_msg`, `my_obj.my_msg`, `my_arr.0`, `my_struct.my_msg`, etc.). |
| ref         | String \| Instance \| Object |              | Reference name or instance id based on the ref in [`i18n_create_ref_message()`](/v0/api-reference/functions/i18n-create-ref-message) function. Recommended to pass `"global"` if the reference is created in global variable, or instance `id` if the reference is created in an instance. |
| locale      | String            | `""`         | The locale code to get the message from. Leave it empty to get the message from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The [`i18n`](/v0/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create some message references
msg = i18n_create_ref_message("msg", "hello");      

button_text = i18n_create_ref_message("button_text", "button.text");

global.hello_text = i18n_create_ref_message("global.hello_text", "hello"); 
global.button_text = i18n_create_ref_message("g.button_text", "button.text");

global.gb_struct = {
    text : i18n_create_ref_message("global.gb_struct.text", "hello"),
    button : i18n_create_ref_message("g.gb_struct.button", "button.text"), 
    menu : {
        about : i18n_create_ref_message("g.gb_struct.menu.about", "menu.help.about") 
    },
    arr : [
        i18n_create_ref_message("global.gb_struct.arr.0", "hello"),
        i18n_create_ref_message("g.gb_struct.arr.1", "bye")
    ]
};

// see the function usage in the Key Pressed - Enter
```

```js [Key Pressed - Space]
// change the locale
switch (i18n_get_locale()) {
    case "en": i18n_set_locale("id"); break;
    case "id": i18n_set_locale("en"); break;
}
```

```js [Key Pressed - Enter]
// get message from "msg" reference in "en" locale
// use `instance_id_get()` to get the instance id
var msg_en = i18n_get_message_from_ref("msg", instance_id_get(self), "en");

// get message from "button_text" reference in current locale
var button_text = i18n_get_message_from_ref("button_text", instance_id_get(self));

// get message from "global.hello_text" reference in "id" locale
// use "global" string to get the reference from global variable
var hello_text_id = i18n_get_message_from_ref("global.hello_text", "global", "id");

// get message from "global.gb_struct.button" reference in current locale
var gb_struct_button = i18n_get_message_from_ref("global.gb_struct.button", "global");

// get message from "global.gb_struct.arr.1" reference in "current" locale
var gb_struct_arr_1_ja = i18n_get_message_from_ref("global.gb_struct.arr.1", "global");
```

```json [en.json]
{
    "hello": "Hello World!",
    "bye": "Goodbye World!",
    "long_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "button": {
        "text": "Click me!",
        "confirm": "Are you sure?",
        "cancel": "Cancel"
    },
    "menu": {
        "file": "File",
        "edit": "Edit",
        "help": {
            "about": "About",
            "quit": "Quit"
        }
    }
}
```

```json [id.json]
{
    "hello": "Halo Dunia!",
    "bye": "Sampai jumpa Dunia!",
    "long_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "button": {
        "text": "Klik saya!",
        "confirm": "Apakah Anda yakin?",
        "cancel": "Batal"
    },
    "menu": {
        "file": "File",
        "edit": "Edit",
        "help": {
            "about": "Tentang",
            "quit": "Keluar"
        }
    }
}
```
::
