import { NextApiRequest, NextApiResponse } from "next";

import {
    fetchWalletAIRTokenBalance,
    parseBalance,
} from "../../lib";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        let address = req.query.wallet_address;
        if (Array.isArray(address)) {
            address  = address[0]
        }
        const result = await fetchWalletAIRTokenBalance(address);
        if(result.status === '1'){
            return res.json(parseBalance(result.result, 18, 3));
        }
        else{
            return res.status(500).send("Internal server error");
        }
    }
    catch(e){
        console.error(e);
        return res.status(500).send("Internal server error");
    }   
}