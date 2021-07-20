import fetch from "node-fetch";

async function getData() {
    try {
        const data = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1dd"
        );
        if (!data.ok) {
            throw Error(data.status);
        }
        const { title } = await data.json();
        return title;
    } catch (e) {
        console.log(e);
    }
}

console.log(await getData());
