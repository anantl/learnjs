# Notes while developing a simple app from Gerd Wagner's 'Building Front-End Web Apps with Plan JavaScript'

- Always use '===' instead of '==' for comparison since the '==' operator does not take objet type into consideration, which could cause problems.
- Block scope is only available from ES6 onwards, window and function scope are the only scopes available till ES5
- Strict mode can be enabled by using ```use strict;``` which makes sure that all variables are previously defined.
- JSON: JavaScript's Object literal Notation
- Objects are basically key value pairs (slots) in JS
- obj.property and obj['property'] are both valid ways of referencing a property
- There are four types of basic data structures in JS: arrays, records, maps and entity tables. The distinction between these data structures are purely conceptual.
- Anonymous functions in JS are lambda functions in other languages.
- JS is an insanely loose language where absolutely anything is possible even if nothing is defined.
- While using the 'inserRow' and 'insertCell' function to add data to a table from JS then we use the index -1 to make sure that the data is appended 
