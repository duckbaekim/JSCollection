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