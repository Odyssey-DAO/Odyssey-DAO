import type { NextApiRequest, NextApiResponse } from 'next';
import quests from "./quests.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json(quests);
    } else {
        res.status(405).send(`Method ${req.method} not allowed`);
    }
}
