export interface regularVerbs {
    id: string,
    past_sound: string,
    verbs: {
        id: string,
        infinitive: string,
        IPA_regular_verbs?: {
            ipa_present_uk?: string ,
            ipa_present_us?: string 
        } | null,
    }
    
}