export interface regularVerbs {
    id: string,
    verbs: {
        id: string,
        infinitive: string,
        present: string,
        type: string,
        meaning: string,
        IPA_regular_verbs?: {
            ipa_present_uk?: string ,
            ipa_present_us?: string 
        } | null,
    }
    
}