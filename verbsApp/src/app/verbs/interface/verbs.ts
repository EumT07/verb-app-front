export interface Verbs {
    id: string,
    infinitive: string,
    type: string,
    meaning_spn: string,
    definition: string,
    IPA_regular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string 
    } | null,
    IPA_irregular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string 
    } | null
}