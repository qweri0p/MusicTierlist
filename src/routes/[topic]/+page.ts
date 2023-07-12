import { error } from "@sveltejs/kit"
import { topic } from "$lib/Sidebar"
import { topics } from "$lib/data/parser"

export function load({params}:any) {
    if (topics.includes(params.topic)){
        topic.set(params.topic)
        return {params}
    } else {
        throw error(404, "Topic '"+params.topic+"' not found.")
    }
}