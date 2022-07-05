import { NextPage } from "next";

interface Requirement {
    name: string,
    description: string
}

export interface QuestProps {
    id: string,
    name: string,
    summary: string,
    description: string,
    requirements: Requirement[]
};

const Quest: NextPage<QuestProps> = (quest) => {
    const { id, name, summary, description, requirements } = quest;

    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 p-3">
                <div className="row-span-2">
                    <img className="aspect-square" src="vercel.svg"></img>
                </div>
                <div>
                    <span className="font-bold">{name}</span>
                </div>
                <div>
                    <span className="italic">{summary}</span>
                </div>
            </div>
        </>
    );
};

export default Quest;
