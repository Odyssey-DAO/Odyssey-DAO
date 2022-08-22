import type {
    IPolygonBalanceResponse,
  } from "../../types";
  import { fetcher, sleep } from "../util";
  import {
    walletAIRTokenBalanceURI,
  } from "./endpoints";
  
// Because of our polygon rate limiting we need to sleep for 200ms between calls - totaling ~1s
  
export const fetchWalletAIRTokenBalance = async (
    walletAddress: string
): Promise<IPolygonBalanceResponse> => {
    sleep(200);
    return fetcher(walletAIRTokenBalanceURI(walletAddress));
};