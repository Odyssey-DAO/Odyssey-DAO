import {
    AIR_TOKEN_ADDRESS,
    POLYGON_API_KEY,
  } from "../constants";
  
const POLYGON_BASE_API_URL = "https://api-testnet.polygonscan.com/api" // "https://api.polygonscan.com/api";

// External Endpoints

export const walletAIRTokenBalanceURI = (walletAddress: string): string => {
    return `${POLYGON_BASE_API_URL}?module=account&action=tokenbalance&contractaddress=${AIR_TOKEN_ADDRESS}&address=${walletAddress}&tag=latest&apikey=${POLYGON_API_KEY}`;
};

 