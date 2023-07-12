import data from "$lib/data/data.json";
export interface album{
    name:string;
    artist:string;
    image:string;
    bandcamp:string;
    description:string;
    tags:string[];
    realartists:string[];
}

function gettags(data:album[]) {
    let temparray:string[] = ["all"]
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.tags.forEach(element => {
            if (temparray.includes(element)) return
            else temparray.push(element)
        });
    }
    return temparray
}

function getartists(data:album[]) {
    let temparray:string[] = ["all"]
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        element.realartists.forEach(element => {
            if (temparray.includes(element)) return
            else temparray.push(element)
        });
    }
    return temparray
}

// export const test = (() => console.log(getartists(albums)))

export const tags = gettags(data)
export const artists = getartists(data)
export const topics = ["artist", "genre"]

export function shuffle(a:album[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }    
    return a;
}

export const albums:album[] = data

export function parseTags(tag:string, data: album[]) {
    let result:album[] = [];
    for (let i = 0; i < data.length; i++) {
       if (data[i].tags.includes(tag)) result.push(data[i])
    }
    return result
}

export function parseArtists(artist:string, data: album[]) {
    let result:album[] = [];
    for (let i = 0; i < data.length; i++) {
       if (data[i].realartists.includes(artist)) result.push(data[i])
    }
    return result
}

// export const test = (() => console.log(parseTags("ambient", data)))