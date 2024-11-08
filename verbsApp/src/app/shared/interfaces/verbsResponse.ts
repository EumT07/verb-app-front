export interface VerbsResponse {
    status: number,
    metaData: {
        totalRegisters: number,
        page: number,
        lastPage: number,
    },
    length: number,
    verbs: []
}