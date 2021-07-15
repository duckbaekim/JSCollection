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


//forEach() 형태 이용, 리턴 없음

//reduce() 길이 형태 모두 변경 가능




