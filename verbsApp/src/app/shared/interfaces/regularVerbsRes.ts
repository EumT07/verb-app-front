export interface RegularVerbsResponse {
    status: number,
    metaData: {
        totalRegisters: number,
        page: number,
        lastPage: number,
    },
    length: number,
    regularVerbs: []
}