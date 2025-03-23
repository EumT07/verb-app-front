export  interface VerbById {
    status: number,
    message: string,
    verb: {
        infinitive: string,
        present: string,
        past: string,
        past_participle: string,
        present_participle: string,
        meaning: {
            spanish: string,
            portuguese: string,
            italian: string,
            french: string,
            german: string
        } | null,
        definition: string,
        type: string,
        RegularVerbs: {
            past_sound: string
        } | null,
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