import { NextPage } from "next";
import { Requirement } from "./Quest";

export interface RequirementsProps {
    requirementsList: Requirement[]
};

const QuestRequirements: NextPage<RequirementsProps> = (requirements) => {
    const { requirementsList } = requirements;

    let index = 1;
    console.log("requirementsList:", requirementsList);

    return (
        <>
            <div className="p-3">Requirements:</div>
            {requirementsList.map((requirement: Requirement) => (
                <div key={index++} className="p-3">{requirement.name}</div>
            ))}
        </>
    );
};

export default QuestRequirements;