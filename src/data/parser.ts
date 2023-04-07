import { data } from "./data";
type tiers = "s"|"a"|"b"|"c"|"d"|"e"
const tiers:tiers[] = ['s', 'a', 'b', 'c', 'd', 'e'];
interface album{
    name:string;
    artist:string;
    image:string;
    bandcamp:string;
    description:string;
    tags:string[]
}

type possibletags = "all"|"vaporwave"|"signalwave"|"dreampunk"|"NUWRLD"|"experimental"|"ambient"|"atmospheric"|"barberbeats"|"chillwave"|"latenitelofi"|"darkambient"|"HKE"|"trap"

type datatemplate = {s: album[]; a: album[]; b: album[]; c: album[]; d: album[]; e: album[]; }

export function parseTags(tag:possibletags, data: datatemplate) {
    //when tag = "all" return unmodified data
    if (tag === "all") return data
    let result:datatemplate = {
        "s":[],
        "a":[],
        "b":[],
        "c":[],
        "d":[],
        "e":[]
    };
    //THIS FUCKING WORKS!!! DONT TOUCH THIS!!! I KNOW ITS CRAP. SO IS THE DATATEMPLATE TYPE!!! DOESNT MATTER
    for (let i = 0; i < tiers.length; i++) {
        let tempdata:album[] = [];
        /*
        For every tier empty the array.
        Then fill it with objects and then move all of that into a single object like the "data" object.
        Lastly clear the tempdata array. And ofc check if it fits with the data template type.
        */
        data[tiers[i]].forEach(element => {
            if (element.tags.includes(tag)) {
                tempdata.push(element)
            }
        });

        //Now the albums are in the tempdata array. Now get them into the result object.
        tempdata.forEach(element => {
            result[tiers[i]].push(element)
        });
    }
    return result
}

const test = (() => console.log(parseTags("HKE", data)))

export const tags = ["all", "vaporwave","signalwave","dreampunk","NUWRLD","experimental","ambient","atmospheric","barberbeats","chillwave","latenitelofi","darkambient","HKE","trap"]




