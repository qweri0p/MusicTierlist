import { error } from '@sveltejs/kit';
import {parseTags, albums, tags, type album, shuffle} from "$lib/data/parser";

const shuffled = shuffle(albums)

export function load({params}:any) {
    // Do routing stuff here
    let records:album[]
    const genre:string = params.genre
    if (!tags.includes(genre)) {
        throw error(404, "Tag '"+genre+"' does not exist.")
    }
     // Do tag parsing here
    else if (genre === "all") {
        records = shuffled
    } else {
        records = parseTags(genre,shuffled)
    }
    return {records}
}