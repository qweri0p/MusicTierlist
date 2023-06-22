import { error } from '@sveltejs/kit';
import {parseTags, albums, tags, type album} from "$lib/data/parser.js";

export function load({params}:any) {
    // Do routing stuff here
    let records:album[]
    const genre = params.genre
    if (!tags.includes(genre)) {
        throw error(404, "Tag does '"+params.genre+"' does not exist.")
    }

     // Do tag parsing here
    else if (genre === "all") {
        records = albums
    } else {
        records = parseTags(genre,albums)
    }

    return {genre,records}
}