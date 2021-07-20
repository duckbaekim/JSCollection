const dogs = [
    {
        이름: "맥스",
        무게: 10,
        견종: "보스턴테리어",
        지역: "위스콘신",
        색상: "검정색",
    },
    {
        이름: "도니",
        무게: 90,
        견종: "레브라도레트리버",
        지역: "캔자스",
        색상: "검정색",
    },
    {
        이름: "섀도",
        무게: 40,
        견종: "래브라도레트리버",
        지역: "위스콘신",
        색상: "갈색",
    },
];

//개 이름을 찾는 펑션
function getDogNames(dogs, filterFunc) {
    return dogs.filter(filterFunc).map((dog) => dog["이름"]);
}

getDogNames(dogs, (dog) => dog["무게"] < 20);
//['맥스']
//위 펑션은 하드코딩이 들어가 유효범위 충돌 가능성 있음

const weightCheck = (weight) => (dog) => dog["무게"] < weight;
console.log(getDogNames(dogs, weightCheck(20)));
//['맥스']

//특정 field에 값 비교 함수 요청시 커링 생성 가능
const identity = (field) => (value) => (dog) => dog[field] === value;
const colorCheck = identity("색상");
const stateCheck = identity("지역");
getDogNames(dogs, colorCheck("갈색"));
//['새도']

function allFilter(dogs, ...checks) {
    return dogs
        .filter((dog) => checks.every((check) => check(dog)))
        .map((dog) => dog["이름"]);
}
allFilter(dogs, colorCheck("검정색"), stateCheck("캔자스"));
//['도니']

function anyFilters(dogs, ...checks) {
    return dogs
        .filter((dog) => checks.some((check) => check(dog)))
        .map((dog) => dog["이름"]);
}
anyFilters(dogs, colorCheck("검정색"), stateCheck("캔자스"));
//['맥스','도니']
