export interface VerbById {
    infinitive: string,
    present: string,
    past: string,
    RegularVerbs: {
        past_sound: string
    } | null,
    past_participle: string,
    present_participle: string,
    type: string,
    Meaning?: {
        spanish?: string,
        portuguese?: string,
        italian?: string,
        french?: string,
        german?: string
    } | null,
    definition: string,
    IPA_regular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string,
        ipa_past_uk?: string,
        ipa_past_us?: string,
        ipa_past_participle_uk?: string,
        ipa_past_participle_us?: string,
        ipa_present_participle_uk?: string,
        ipa_present_participle_us?: string
    } | null,
    IPA_irregular_verbs?: {
        ipa_present_uk?: string ,
        ipa_present_us?: string,
        ipa_past_uk?: string,
        ipa_past_us?: string,
        ipa_past_participle_uk?: string,
        ipa_past_participle_us?: string,
        ipa_present_participle_uk?: string,
        ipa_present_participle_us?: string
    } | null
}