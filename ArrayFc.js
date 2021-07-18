const testArr = [{name : 'inqu', age : 30}, {name:'test', age: 31}];
const team = [
    {
        name: 'melinda',
        position: 'ux designer'
    },
    {
        name : 'katie',
        position:'stategist'
    },
    {
        name:'madhavi',
        position:'developer'
    },
    {
        name:'justi혀n',
        position:'manager'
    },
    {
        name:'chris',
        position:'developer'
    }
]

//map() 길이 유지, 배열 형태변경
const prices = ['1,0','흥정가능', '2.15']
const formattedPrices = prices.map(price=>parseFloat(price));
console.log(formattedPrices)
//[1, NaN, 2.15]


//sort() 순서 변경, 형태 & 길이 유지


//filter() 길이 변경, 형태 유지
const filterPrice = formattedPrices.filter(price=>price)
//[1, 2.15]


//find() 1개 데이터 반환, 형태 유지
const findChris = team.find(user => user.name ==='chris')
console.log(findChris);


//reduce() 길이 형태 모두 변경 가능
const reduceTeam = team.reduce((user, item, id) => {
   return [...user , {...item, id}]
},[])
//   [{ name: 'melinda', position: 'ux designer', id: 0 },
//   { name: 'katie', position: 'stategist', id: 1 },
//   { name: 'madhavi', position: 'developer', id: 2 },
//   { name: 'justi혀n', position: 'manager', id: 3 },
//   { name: 'chris', position: 'developer', id: 4 }]


//every() 모든 값이 true를 반환할 떄 true 반환
const checkEvery = testArr.every(test=> test.age >=30);
console.log(checkEvery);

//some() 실행 결과 중 하나라도 true를 반환 true
const checkSome = testArr.some(test=> test.age >30);
console.log(checkSome);