import { error } from '@sveltejs/kit';
import {albums, type album, shuffle, parseArtists, artists} from "$lib/data/parser";

const shuffled = shuffle(albums)

export function load({params}:any) {
    // Do routing stuff here
    let records:album[]
    const artist:string = params.artist
    if (!artists.includes(artist)) {
        throw error(404, "Artist '"+artist+"' does not exist.")
    }
     // Do tag parsing here
    /*else */if (artist === "all") {
        records = shuffled
    } else {
        records = parseArtists(artist,shuffled)
    }
    return {records}
}