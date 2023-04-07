import { error } from '@sveltejs/kit';
import { tags } from '../../data/parser.js';
export const prerender = true;

export function load({params}) {
    const genre = params.genre
    if (!tags.includes(genre)) throw error(404, "Tag does '"+params.genre+"' does not exist.")
    return {genre}
}