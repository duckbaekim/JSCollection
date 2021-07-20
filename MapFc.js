//init
let mapTest = new Map();

//추가
mapTest.set("견종", "래브라도레트리버");

//chaining
mapTest.set("크기", "대형견").set("색상", "갈색");

//조회
mapTest.get("견종");

//삭제
mapTest.delete("견종");

//key반환
mapTest.keys(); //map iteraiter

//존재확인
mapTest.has("견종");

//

console.log(mapTest);
