# binary_search()

This function is used to search for a value in a sorted array using binary search algorithm. It's a helper function used internally by the **GM-I18n** system. You can also use it on your own code if you need to search for a value in a sorted array, not only exclusively for the **GM-I18n** system.

## Syntax

::code-group
```js [Usage]
binary_search(array, target);
```

```ts [Signature]
function binary_search(
    array: any[],
    target: any
): number
```
::

## Parameters

| Name        | Type              | Default      | Description |
|-------------|-------------------|--------------|-------------|
| array       | Array             |              | The sorted array to search for the target value. |
| target      | Any               |              | The target value to search for in the array. |

## Returns

> `Integer` (the index of the target value in the array, or `-1` if not found)

## Examples

```js [Create Event]
// create a sorted array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// search for the index of number 5 in the array
var index = binary_search(arr, 5);     // 4 (index of number 5 in the array)

// search for the index of number 11 in the array
var index = binary_search(arr, 11);    // -1 (not found)
```
