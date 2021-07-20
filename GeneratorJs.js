//init
function* getCairoTrilogy(){
    yield '궁전 샛길';
    yield '욕망의 궁전';
    yield '설탕 거리';
}

//호출 
const trilogy = getCairoTrilogy();
trilogy.next();
//{value : '궁전 샛길', done: false}

//배열에 담기
[...getCairoTrilogy()]
//[ '궁전 샛길', '욕망의 궁전', '설탕 거리' ]


//obj에 값 추가
const readingList = {
    '깡패단의 방문' : false,
    '맨해튼의 비치' : false,
};

for(const book of getCairoTrilogy()){
    readingList[book] = false;
}
console.log(readingList)
//readingList
//{
//   '깡패단의 방문': false,
//   '맨해튼의 비치': false,
//   '궁전 샛길': false,
//   '욕망의 궁전': false,
//   '설탕 거리': false
// }