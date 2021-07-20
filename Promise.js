//init
export function getUserPreferences(){
    const preferences = new Promise((resolve, reject)=>{
        resolve({
            theme: 'dusk',
        });
    });
    return preferences;
}

function failUserPreference(){
    const finder = new Promise((resolve, reject) => {
        reject({
            type: '접근 거부됨',
        })
    })
    return finder;
}

//호출
getUserPreferences().then(preferences=>{
    console.log(preferences.theme);
})

failUserPreference().then(preferences=>{
    //실행 안됨
    console.log(preferences.theme);
})
.catch(error=>{
    console.log(`실패: ${error.type}`)
})

//중첩된 Promise
export function getMusic(theme){
    if(theme==='dusk'){
        return Promise.resolve({
            album:'music for airports',
        })
    }
    return Promise.resolve({
        album:'kind of blue',
    })
}

export function getAritist(album){
    return Promise.resolve({
        artist:'Brian Eno'
    })
}

getUserPreferences().then(preferences => {
    return getMusic(preferences.theme);
}).then(music=> {
    console.log(music.album);
}).catch(e=>{
    console.log(e)
})

//refactoring
getUserPreferences().then(preferences => getMusic(preferences.theme))
.then(music=>{console.log(music.album)})
.catch(e=>{console.log(e)})
