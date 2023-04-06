import { data } from "./data";
type tiers = "s"|"a"|"b"|"c"|"d"|"e"
const tiers:tiers[] = ['s', 'a', 'b', 'c', 'd', 'e'];
interface album{
    name:string;
    artist:string;
    image:string;
    bandcamp:string;
    description:string;
    tags?:string[]
}

type datatemplate = {s: album[]; a: album[]; b: album[]; c: album[]; d: album[]; e: album[]; }

export function parseTags(tag:string, data: datatemplate) {
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
        for (let j = 0; j < data[tiers[i]].length; j++) {
            if (data[tiers[i]][j].tags?.includes(tag)) {
                tempdata.push(data[tiers[i]][j])
            }
        }

        //Now the albums are in the tempdata array. Now get them into the result object.
        tempdata.forEach(element => {
            result[tiers[i]].push(element)
        });
    }
    return result
}

export const logger = (() => console.log(parseTags("HKE", data)))


