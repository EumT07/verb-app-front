export  interface VerbByName {
    status: number,
    message: string,
    verbs: {
        infinitive: string,
        present: string,
        past: string,
        past_participle: string,
        present_participle: string,
        meaning: string,
        type: string,
        IPA_regular_verbs?: {
            ipa_present_uk: string,
            ipa_present_us: string,
            ipa_past_uk: string,
            ipa_past_us: string,
            ipa_past_participle_uk: string,
            ipa_past_participle_us: string,
            ipa_present_participle_uk: string,
            ipa_present_participle_us: string
        } | null,
        IPA_irregular_verbs?: {
            ipa_present_uk: string,
            ipa_present_us: string,
            ipa_past_uk: string,
            ipa_past_us: string,
            ipa_past_participle_uk: string,
            ipa_past_participle_us: string,
            ipa_present_participle_uk: string,
            ipa_present_participle_us: string
        } | null
    }
}