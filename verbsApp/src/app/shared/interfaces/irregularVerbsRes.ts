export interface IrregularVerbsResponse {
    status: number,
    metaData: {
        totalRegisters: number,
        page: number,
        lastPage: number,
    },
    length: number,
    irregularVerbs: []
}