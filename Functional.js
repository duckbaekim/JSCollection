import _ from "lodash"
// *
// **
// ***
// ****
// *****

// while  => range 
// function f3(end){
//    let i = 0;
//    while(i<end){
//    ... logic
//    } 
// }
function f3(end){
    _.each(console.log, L.range(end));
}
f3(10);