export interface Verbs {
    id: string,
    infinitive: string,
    IPA_regular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string 
    } | null,
    IPA_irregular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string 
    } | null
}