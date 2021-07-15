//init 
const colors = ['검정','검정','갈색']
const unique = new Set(colors);

//고유 배열 리턴
console.log([...new Set(colors)]);

//객체 배열에서 고유 색상 배열 추출
const dogs = [ 
{name : '맥스',
size: '소형견',
type: '보스턴테리어',
color:'검정색'
},
{
    name:'도니',
    size:'대형견',
    type:'래브라도레트리버',
    color:'검정색'
},
{
    name: '섀도',
    size:'중형견',
    type: '래브라도레트리버',
    color:'갈색'

}
];

console.log([...dogs.reduce((colors, {color})=> colors.add(color), new Set())])

