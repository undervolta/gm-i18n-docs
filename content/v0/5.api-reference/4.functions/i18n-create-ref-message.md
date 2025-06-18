# i18n_create_ref_message()

The `i18n_create_ref_message()` function is used to create a reference to the localized message. This reference will automatically update itself when the locale is changed by calling [`i18n_set_locale()`](/v0/api-reference/functions/i18n-set-locale) function.

This function can only be used after the [`i18n_create()`](/v0/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_create_ref_message(var_name, key, [data], [i18n]);
```

```ts [Signature]
function i18n_create_ref_message(
    var_name: string,
    key: string,
    data?: number | any[] | { [key: string]: any; },
    i18n?: I18n | boolean                           // default = false (using global i18n struct)
): string
```
::

## Parameters

| Name         | Type              | Default      | Description |
|--------------|-------------------|--------------|-------------|
| var_name     | String            |              | The name of the variable that will store the message reference. The `var_name` can be in any level of the instance variable or global variable (e.g. `global.my_obj.my_msg`, `my_obj.my_msg`, `my_arr.0`, `my_struct.my_msg`, etc.). |
| key          | String            |              | The message key you want to reference (e.g. `hello`, `button.text`, `menu.help.about`, etc.). |
| data         | Real \| Array \| Struct | `undefined` | The data to pass to the message. You can pass an integer for pluralization, an array for indexed data interpolation, or a struct for named data interpolation (e.g. `1`, `["Hello", "World"]`, `{ name: "John" }`). |
| i18n         | Boolean \| I18n | `false`      | The [`i18n`](/v0/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `String` (message based on the `key` in the **current locale** of the `i18n` struct)

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// the variable name is "msg"
msg = i18n_create_ref_message("msg", "hello");      

// the variable name is "button_text"
button_text = i18n_create_ref_message("button_text", "button.text");

// message ref in array, the variable name is "my_arr"
my_arr = [
    i18n_create_ref_message("my_arr.0", "hello"),       // this reference is created in index 0
    i18n_create_ref_message("my_arr.1", "bye"),         // this one is in index 1, separate the array index with dot "."
    "",
    i18n_create_ref_message("my_arr.3", "long_text")    // not always need to be created consecutively
];

// message ref in struct, the variable name is "my_struct"
my_struct = {
    text : i18n_create_ref_message("my_struct.text", "hello"),                // the key is "hello"
    button : i18n_create_ref_message("my_struct.button", "button.text"),      // the var_name is this struct member name
    about : i18n_create_ref_message("my_struct.edit", "menu.help.about"),     // separate the struct member with dot "."
    nested : {
        bye : i18n_create_ref_message("my_struct.nested.bye", "bye")          // you can nest the struct as deep as you want
    },
    arr : [
        i18n_create_ref_message("my_struct.arr.0", "hello"),                  // you can also create the reference in array
        i18n_create_ref_message("my_struct.arr.1", "bye")
    ]
}

// message ref in global variable, the variable name is "global.hello_text"
global.hello_text = i18n_create_ref_message("global.hello_text", "hello");      // use "global" keyword like you're defining a global variable
global.button_text = i18n_create_ref_message("g.button_text", "button.text");   // you can use "g." shorthand for "global."

// message ref in global array
global.gb_arr = [
    i18n_create_ref_message("g.gb_arr.0", "hello"),         // same as you're creating the reference in instance variable,
    i18n_create_ref_message("global.gb_arr.1", "bye")       // but use "global." or "g." as the prefix
];

// message ref in global struct
global.gb_struct = {
    text : i18n_create_ref_message("global.gb_struct.text", "hello"),           // same as you're creating the reference in instance variable,
    button : i18n_create_ref_message("g.gb_struct.button", "button.text"),      // but use "global." or "g." as the prefix
    menu : {
        about : i18n_create_ref_message("g.gb_struct.menu.about", "menu.help.about")   // a nested struct in global struct
    },
    arr : [
        i18n_create_ref_message("global.gb_struct.arr.0", "hello"),            // you can also create the reference in array
        i18n_create_ref_message("g.gb_struct.arr.1", "bye")
    ]
};
```

```js [Key Pressed - Space]
// change the locale, and the messages will be changed automatically!
switch (i18n_get_locale()) {
    case "en": i18n_set_locale("id"); break;
    case "id": i18n_set_locale("ja"); break;
    case "ja": i18n_set_locale("en"); break;
}
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

---

::alert{type="info"}
The `var_name` is **not** the name of the message itself. You can name the `var_name` as you want, as long as it's **unique** (no duplicated name) in the same level of the variable. <br> <br>

For the detailed usage of `data` parameter, you can see the [Interpolation](/v0/usage/interpolation) and [Pluralization](/v0/usage/pluralization) section.
::

::alert{type="success"}
You're **heavily recommended** to create any i18n references in the `Create Event`.
::
