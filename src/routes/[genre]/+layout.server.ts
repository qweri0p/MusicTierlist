import { error } from '@sveltejs/kit';
import { parseTags } from '../../data/parser.js';
const tags = ["all", "vaporwave","signalwave","dreampunk","NUWRLD","experimental","ambient","atmospheric","barberbeats","chillwave","latenitelofi","darkambient","HKE","trap"]


export function load({params}) {
    const genre = params.genre
    if (!tags.includes(genre)) throw error(404)
    return {genre}
}