export interface irregularVerbs {
    id: string,
    verbs: {
        id: string,
        infinitive: string,
        IPA_irregular_verbs?: {
            ipa_present_uk?: string ,
            ipa_present_us?: string 
        } | null,
    }
}