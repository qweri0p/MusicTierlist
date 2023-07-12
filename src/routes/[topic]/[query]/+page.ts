import { error } from '@sveltejs/kit';
import { albums, type album, shuffle, parseArtists, artists, tags, parseTags } from "$lib/data/parser";

const shuffled = shuffle(albums)

export function load({params}:any) {
    let records:album[]

    if (params.topic === "artist"){
        if (!artists.includes(params.query)) throw error(404, "Artist '"+params.query+"' does not exist.")
        records = parseArtists(params.query, shuffled)
    } else if (params.topic === "genre"){
        if (!tags.includes(params.query)) throw error(404, "Genre '"+params.query+"' does not exist.")
        records = parseTags(params.query, shuffled)
    } else {
        throw error(404, "Topic "+params.topic+" not found.")
    }

    if (params.query === "all") {
        records = shuffled
    }
    
    return {records}
}