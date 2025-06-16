# i18n_get_asset_from_ref()

The `i18n_get_asset_from_ref()` function is used to get the asset from the reference you created using the `i18n_create_ref_asset()` function. 

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_get_asset_from_ref(var_name, ref, [locale], [i18n]);
```

```ts [Signature]
function i18n_get_asset_from_ref(
    var_name: string,
    ref: "global" | Instance | Object,
    locale?: string,                    // default = "" (use the current locale)
    i18n?: I18n | boolean               // default = false (using global i18n struct)
): Asset
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| var_name    | String            |              | Variable name based on the `var_name` in `i18n_create_ref_asset()` function (e.g. `global.my_obj.my_spr`, `my_obj.my_spr`, `my_arr.0`, `my_struct.my_spr`, etc.). |
| ref         | String \| Instance \| Object |              | Reference name or instance id based on the ref in `i18n_create_ref_asset()` function. Recommended to pass `"global"` if the reference is created in global variable, or instance `id` if the reference is created in an instance. |
| locale      | String            | `""`         | The locale code to get the asset from. Leave it empty to get the asset from the **current locale**. |
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Asset`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable

// create some asset references
my_spr = i18n_create_ref_asset("my_spr", {
    en: sprSplashEn,
    id: sprSplashId,
    ja: sprSplashJa
});

my_arr = [
    i18n_create_ref_asset("my_arr.0", {
        en: sndVoiceEn,
        id: sndVoiceId,
        ja: sndVoiceJa
    })
];

global.my_obj = i18n_create_ref_asset("global.my_obj", {
    en: objPlayerEn,
    id: objPlayerId,
    ja: objPlayerJa
});

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

// see the function usage in the Key Pressed - Enter
```

```js [Key Pressed - Space]
// switch the locale
switch (i18n_get_locale()) {
    case "en": i18n_set_locale("id"); break;
    case "id": i18n_set_locale("ja"); break;
    case "ja": i18n_set_locale("en"); break;
}
```

```js [Key Pressed - Enter]
// get asset from "my_spr" reference in "en" locale
// use `instance_id_get()` to get the instance id
var my_spr_en = i18n_get_asset_from_ref("my_spr", instance_id_get(self), "en");

// get asset from "my_spr" reference in current locale
var my_spr = i18n_get_asset_from_ref("my_spr", instance_id_get(self));

// get asset from "my_arr" reference in "id" locale
var my_arr_id = i18n_get_asset_from_ref("my_arr.0", instance_id_get(self), "id");

// get asset from "global.my_obj" reference in current locale
// use "global" string to get the reference from global variable
var my_obj = i18n_get_asset_from_ref("global.my_obj", "global");

// get asset from "global.my_font.ui_font.0" reference in "ja" locale
var my_font_ja = i18n_get_asset_from_ref("global.my_font.ui_font.0", "global", "ja");
```
::
