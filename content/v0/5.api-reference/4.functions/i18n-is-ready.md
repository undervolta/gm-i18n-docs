# i18n_is_ready()

The `i18n_is_ready()` function is used to check if the **GM-I18n** system already load all of the initialized locale files.

This function can only be used after the `i18n_create()` function is called.

## Syntax

::code-group
```js [Usage]
i18n_is_ready([i18n]);
```

```ts [Signature]
function i18n_is_ready(
    i18n?: I18n | boolean           // default = false (using global i18n struct)
): boolean
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| i18n        | Boolean \| I18n | `false`      | The `i18n` struct reference, or leave it empty to use the `global` i18n struct. |

## Returns

> `Boolean`

## Examples

::code-group
```js [Create Event]
// assume the system is initialized on global variable
```

```js [Step Event]
// check if the system is ready
if (i18n_is_ready()) {
    // do something
}
```

::