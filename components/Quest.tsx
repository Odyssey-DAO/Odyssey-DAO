import { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";

export interface Requirement {
    name: string,
    description: string
};

export interface QuestProps {
    id: string,
    name: string,
    summary: string,
    description: string,
    image: string,
    requirements: Requirement[],
    setQuestId: Dispatch<SetStateAction<string>>
};

const Quest: NextPage<QuestProps> = (quest) => {
    const { id, name, summary, description, image, requirements, setQuestId } = quest;

    return (
        <>
            <div className="grid grid-cols-3 border-2 m-1 bg-gray-500" onClick={() => setQuestId(id)}>
                <div className="flex justify-center p-2">
                    <img className="h-32 w-24" src={image}></img>
                </div>
                <div className="col-span-2 p-2">
                    <h4 className="font-bold">{name}</h4>
                    <p className="italic">{summary}</p>
                </div>
            </div>
        </>
    );
};

export default Quest;
