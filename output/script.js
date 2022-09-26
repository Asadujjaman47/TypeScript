"use strict";
// array
let mixed = ['apple', 3, true, {}];
mixed.push(34);
mixed.push('banana');
mixed.push(false);
// others type get error:
mixed.push({
    name: "Asad",
});
