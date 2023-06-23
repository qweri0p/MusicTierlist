import data from "$lib/data/data.json";
export interface album{
    name:string;
    artist:string;
    image:string;
    bandcamp:string;
    description:string;
    tags:string[]
}

export type possibletags = "all"|"vaporwave"|"signalwave"|"dreampunk"|"NUWRLD"|"experimental"|"ambient"|"atmospheric"|"barberbeats"|"chillwave"|"latenitelofi"|"darkambient"|"HKE"
export const tags = ["all", "vaporwave","signalwave","dreampunk","NUWRLD","experimental","ambient","atmospheric","barberbeats","chillwave","latenitelofi","darkambient","HKE"]

export const albums:album[] = shuffle(data)

function shuffle(a:album[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function parseTags(tag:possibletags, data: album[] ) {
    let result:album[] = [];
    for (let i = 0; i < albums.length; i++) {
       if (data[i].tags.includes(tag)) result.push(data[i])
    }
    return result
}

export const test = (() => console.log(parseTags("HKE", data)))