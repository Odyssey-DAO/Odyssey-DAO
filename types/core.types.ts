interface IPolygonResponseBase {
    status: string;
    message: string;
    apiCall?: string;
}

export interface IPolygonBalanceResponse extends IPolygonResponseBase {
    result: string;
}