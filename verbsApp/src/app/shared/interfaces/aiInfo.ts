export interface AiInfo {
    verb: string,
    definition: string,
    translation : {
        spanish : string,
        portuguese: string
    },
    sentences : {
        present: string[],
        past: string[],
        past_Participle: string[],
        present_Participle: string[],
        future: string[]
    }
}