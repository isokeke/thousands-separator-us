# thousands-separator-us

A thousands separator built with Javascript. Uses the American standard notation, using commas to separate groups of thousands and a period to indicate the decimal place. 

Uses a regular expression in order to replace non-digit characters.

The function can be called directly from HTML, when a unique id for the input field is required.
```html
<input id="exampleField" type="text" onchange="thousandSeparator(this.id)">
```

Field value is updated when the user leaves the focus from the field (onchange event).

A few examples:
````
User input: 123456789.00   Output: 123,456,789
User input: 4294967295.80   Output: 4,294,967,295.80 
User input: 424,96a295.88123  Output: 42,496,295.88 
```
