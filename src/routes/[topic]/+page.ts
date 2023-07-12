import { error } from "@sveltejs/kit"
import { topics } from "$lib/data/parser"

export function load({params}:any) {
    if (topics.includes(params.topic)){
        return {params}
    } else {
        throw error(404, "Topic '"+params.topic+"' not found.")
    }
}