const objTest = {red: '#d10202', green : '#19d122', blue : '#0e33d8'};

//spread
const objSpread = {...objTest, black: '#000000'};
// { red: '#d10202', green: '#19d122', blue: '#0e33d8', black: '#000000' }

//deep Spread
const deepSpread = {...objTest, color: {...objTest}};
// {
//     red: '#d10202',
//     green: '#19d122',
//     blue: '#0e33d8',
//     color: { red: '#d10202', green: '#19d122', blue: '#0e33d8' }
// }

