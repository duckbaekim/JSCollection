import { getUserPreferences, getMusic, getAritist } from "./Promise.js";

async function getTheme() {
    const { theme } = await getUserPreferences();
    return theme;
}

//async 함수는 promise 를 리턴 아래 호출 확인
getTheme().then((theme) => {
    console.log(theme);
});

// 이점이 안보인다면 여러개의 프로미스를 다룰때 강점이 있다. 아래 코드 확인
async function getArtistByPreference() {
    const { theme } = await getUserPreferences();
    const { album } = await getMusic(theme);
    const { artist } = await getAritist(album);
    return artist;
}

getArtistByPreference()
    .then((artist) => {
        console.log(artist);
    })
    .catch((e) => {
        console.error(e);
    });
