# i18n_create_ref_asset()

The `i18n_create_ref_asset()` function is used to create a reference to the localized asset. This reference will automatically update itself when the locale is changed by calling [`i18n_set_locale()`](/v1/api-reference/functions/i18n-set-locale) function.

This function can only be used after the [`i18n_create()`](/v1/api-reference/functions/i18n-create) function is called.

## Syntax

::code-group
```js [Usage]
i18n_create_ref_asset(var_name, locale_asset, [i18n]);
```

```ts [Signature]
function i18n_create_ref_asset(
    var_name: string,
    locale_asset: { [locale_code: string]: Asset; },
    i18n?: I18n | boolean                           // default = false (using global i18n struct)
): Asset
```
::

## Parameters

| Name         | Type              | Default      | Description |
|--------------|-------------------|--------------|-------------|
| var_name     | String            |              | The name of the variable that will store the asset reference. The `var_name` can be in any level of the instance variable or global variable (e.g. `global.my_obj.my_spr`, `my_obj.my_spr`, `my_arr.0`, `my_struct.my_spr`, etc.). |
| locale_asset | Struct            |              | The localized asset for each locale. The `key` is the locale code, and the `value` is the asset ID (e.g. `{"en": sprSplashEn, "id": sprSplashId, "ja": sprSplashJa}`). |
| i18n         | Boolean \| I18n | `false`      | The [`i18n`](/v1/api-reference/functions/i18n-create) struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Asset` (in the **current locale** of the `i18n` struct)

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create some asset references
// the `var_name` is the name of the variable that will store the asset reference
// for this example, we will use the `my_spr` variable to store the sprite reference
my_spr = i18n_create_ref_asset("my_spr", {
    en: sprSplashEn,
    id: sprSplashId,
    ja: sprSplashJa
});

// you can create the reference in array
// add the index of the array to the `var_name` separated by dot "."
// so, the `var_name` is "my_arr.0"
my_arr = [
    i18n_create_ref_asset("my_arr.0", {
        en: sndVoiceEn,
        id: sndVoiceId,
        ja: sndVoiceJa
    })
];

// you can also create the reference in struct
// add the member name of the struct to the `var_name` separated by dot "." 
// so, the `var_name` is "my_struct.my_spr" and "my_struct.my_snd.0"
my_struct = {
    my_spr : i18n_create_ref_asset("my_struct.my_spr", {
        en: sprTutorial1En,
        id: sprTutorial1Id,
        ja: sprTutorial1Ja
    }),
    my_snd : [
        i18n_create_ref_asset("my_struct.my_snd.0", {
            en: sndVoiceEn,
            id: sndVoiceId,
            ja: sndVoiceJa
        })
    ]
};

// in global variable, add "global." or "g." as the prefix
global.my_obj = i18n_create_ref_asset("global.my_obj", {
    en: objPlayerEn,
    id: objPlayerId,
    ja: objPlayerJa
});

// you can also create the reference in array in global variable
global.my_room = [
    i18n_create_ref_asset("g.my_room.0", {
        en: rmMainMenuEn,
        id: rmMainMenuId,
        ja: rmMainMenuJa
    })
];

// you can also create the reference in struct in global variable, and even nested struct in global struct!
global.my_font = {
    my_font_1 : i18n_create_ref_asset("g.my_font.my_font_1", {
        en: fnNotoSansEn,
        id: fnNotoSansId,
        ja: fnNotoSansJa
    }),
    ui_font : [
        i18n_create_ref_asset("global.my_font.ui_font.0", {
            en: fnNotoSansEn,
            id: fnNotoSansId,
            ja: fnNotoSansJa
        })
    ]
};
```

```js [Key Pressed - Space]
// change the locale, and the assets will be changed automatically!
switch (i18n_get_locale()) {
    case "en": i18n_set_locale("id"); break;
    case "id": i18n_set_locale("ja"); break;
    case "ja": i18n_set_locale("en"); break;
}
```

```js [Key Pressed - Enter]
// play the sound
audio_play_sound(my_arr[0], 1, false);
audio_play_sound(my_struct.my_snd[0], 1, false);
```

```js [Draw Event]
// draw the sprite
draw_sprite(my_spr, 0, 100, 50);
draw_sprite_ext(my_struct.my_spr, 0, 100, 200, 1, 1, 0, c_white, 1);
```
::

---

::alert{type="info"}
The `var_name` is **not** the name of the asset itself. You can name the `var_name` as you want, as long as it's **unique** (no duplicated name) in the same level of the variable.
::

::alert{type="success"}
You're **heavily recommended** to create any i18n references in the `Create Event`.
::
