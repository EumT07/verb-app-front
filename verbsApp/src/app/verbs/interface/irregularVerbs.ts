export interface irregularVerbs {
    id: string,
    verbs: {
        id: string,
        infinitive: string,
        present: string,
        type: string,
        meaning: string,
        IPA_irregular_verbs?: {
            ipa_present_uk?: string ,
            ipa_present_us?: string 
        } | null,
    }
}