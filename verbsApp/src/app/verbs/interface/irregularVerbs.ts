export interface irregularVerbs {
    id: string,
    verbs: {
        id: string,
        infinitive: string,
        present: string,
        type: string,
        meaning_spn: string,
        definition: string,
        IPA_irregular_verbs?: {
            ipa_present_uk?: string ,
            ipa_present_us?: string 
        } | null,
    }
}