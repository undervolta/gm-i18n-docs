# i18n_update_loader()

The `i18n_update_loader()` function is used to update the loader function used by the **GM-I18n** system to load the initial locale files.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_update_loader([use_delta_time], [i18n]);
```

```ts [Signature]
function i18n_update_loader(
    use_delta_time?: boolean,       // default = false
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): void
```
::

## Parameters

| Name           | Type              | Default      | Description |
|----------------|-------------------|--------------|-------------|
| use_delta_time | Boolean           | `false`      | Use delta time to update the loader. |
| i18n           | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Void`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable
```

```js [Step Event]
// update the loader
i18n_update_loader();
```
::

---

::alert{type="warning"}
This function is **only** used if you're importing the text translation through JSON files. <br> <br>

You **need** to call this function in event that updated every step. I recommend to use `Step Event` for this.
::
