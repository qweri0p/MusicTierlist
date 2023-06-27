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
//TODO: This is dumb and a bad solution.
//I should write a private function to create this list.
//Simple forEach() thing should work
export const tags = ["all","dreampunk","club","dreamcatalogue","ambient","atmospheric","garage","slushwave","dnb","flap"]
export const artists = ["all","telepath","nmesh","haloacid","hke","iiteration","inertiaeyes","sangam","remember", "purelife", "qmdx", "aut2m", "shima33"]

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