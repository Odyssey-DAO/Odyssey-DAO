import { formatUnits, commify } from "@ethersproject/units";

export const fetcher = async (uri: string, config = undefined): Promise<any> => {
    const res = await fetch(uri, config);
    return res.json();
};

export const parseBalance = (
    value: string,
    decimals = 18,
    decimalsToDisplay = 0
): string => {
    return commify(parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay));
  };
  
export const parseBalanceToNum = (
    value: string,
    decimals = 18,
    decimalsToDisplay = 0
): number => {
    return parseInt(parseFloat(formatUnits(value, decimals)).toFixed(decimalsToDisplay));
}

export const sleep = (milliseconds: number): void => {
    const date: number = Date.now();
    let currentDate: number;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};