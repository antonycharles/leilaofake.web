export default interface IErroDefault {
    code?: number,
    message: string,
    details?: Array<string>,
    innerError?: string
}