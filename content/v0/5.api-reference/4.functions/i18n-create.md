# i18n_create()

The `i18n_create()` function is used to create a new **GM-I18n** system. This function will initialize the i18n system and return a struct reference to it.

This is the most important function in the **GM-I18n** API. You must call this function before using any other functions in the API.


## Syntax

::code-group
```js [Usage]
i18n_create(var_name, default_locale, locales, [options]);
```

```ts [Signature]
function i18n_create(
    var_name: string,                           // variable name to store the i18n system
    default_locale: string,                     // default/fallback language code
    locales: I18nLocaleInit[],                  // array of `I18nLocaleInit` struct to initialize the available locales
    options?: boolean | {                       // default = false (no options)
        debug?: boolean,                        // toggle debug mode, default = false
        default_message?: string,               // default message, default = ""
        hashed: boolean,                        // enable hashed message, default = true
        linked_end?: string,                    // linked message end delimiter, default = "]"
        linked_start?: string,                  // linked message start delimiter, default = "["
        plural_delimiter?: string,              // plural message delimiter, default = "|"
        plural_start_at?: number,               // plural message starting index, default = 0
        time?: number | number[] | boolean      // locale files loading interval, default = false (load all files at once)
    }
): I18n
```

```ts [Interface]
interface I18n {
    data: {
        [locale_code: string]: {
            dictionaries: {
                [key: number]: string               // key = dictionary key (hashed automatically)
            },
            drawings: {
                [preset_name: string]: I18nDrawings
            },
            messages: {
                [key: string | number]: string      // key = message key
            }
        }
    },
    debug: boolean,                     // debug mode
    default_locale: string,             // default/fallback language
    default_message: string,            // default message
    hashed: boolean,                    // enable hashed message
    linked_end: string,                 // linked message end delimiter
    linked_start: string,               // linked message start delimiter
    loader: I18nLoad,					// locale files loader (become undefined after all files are loaded)
	locale: string,						// selected/current language
	locales: I18nLocaleInit[],			// available locales from `locales` parameter
	name: string,                       // variable name to store the i18n system
    plural_delimiter: string,           // plural message delimiter
    plural_start_at: number,            // plural message starting index
    refs: {
        messages: {
            inst: (Instance | "global")[],
            refs: string[],
            keys: string[],
            data: (number | any[] | {[key: string]: any})[],
        },
        assets: {
            inst: (Instance | "global")[],
            refs: string[],
            assets: {[key: string]: Asset}[]
        }
    },
    scope: "global" | "instance",       // scope of the i18n system
    time: number | number[] | boolean   // locale files loading interval
}
```
::

## Parameters

| Name           | Type              | Default      | Description |
|----------------|-------------------|--------------|-------------|
| var_name       | String            |              | The name of the variable to store the i18n system (e.g. `global.i18n`). Use `global` keyword if you want to store it in global variable. |
| default_locale | String            |              | The default locale code to use (e.g. `en`, `id`, `ja`, etc.). |
| locales        | I18nLocaleInit\[] |              | The array of [`I18nLocaleInit`](/v0/api-reference/constructors#i18nlocaleinit) struct to initialize the available locales. |
| options        | Boolean \| Struct | `false`      | The options to configure the i18n system. You can pass your desired options as a struct (e.g. `{ debug: true, default_message: "N/A" }`). |

## Returns

> `I18n`

## Examples

```js [Create Event]
// initialize the GM-I18n system
global.i18n = i18n_create("global.i18n", "en", [
    new I18nLocaleInit("en", "English", "~/langs/en.json"),
    new I18nLocaleInit("id", "Bahasa Indonesia", "~/langs/id.json")
]);

// initialize the GM-I18n system with options
global.i18n = i18n_create("global.i18n", "en", [
    new I18nLocaleInit("en", "English", "~/langs/en.json"),
    new I18nLocaleInit("id", "Bahasa Indonesia", "~/langs/id.json"),
    new I18nLocaleInit("ja", "日本語", "~/langs/ja.json")
], {
    debug: true,
    default_message: "N/A",
    hashed: true,
    plural_start_at: 1,
    time: 0.5
});

// initialize the GM-I18n system in instance variable (not recommended)
i18n = i18n_create("i18n", "en", [
    new I18nLocaleInit("en", "English", "~/langs/en.json"),
    new I18nLocaleInit("id", "Bahasa Indonesia", "~/langs/id.json")
]);
```

---

::alert{type="info"}
The `i18n_create()` function will automatically set the [`global.i18n_name`](/v0/api-reference/global-variables#i18n_name) variable to the name of the i18n system you created. You can use this variable to access the i18n system from anywhere in your game. <br> <br>

You can optimize the locale files loading by using the `time` option. Please read the [Chunk Loading](/v0/advanced/optimizations#chunk-loading) section for more information.
::

::alert{type="warning"}
Though you can create multiple **GM-I18n** system, it's not recommended, unless you know what you're doing.
::

::alert{type="success"}
You're **heavily recommended** to use `global` variable to store the i18n system.
::
