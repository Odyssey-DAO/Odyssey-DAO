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
            <div className="grid grid-rows-6 h-full p-1">
                <div className="row-span-1 w-full h-full flex justify-center items-center">
                    <span>REQUIREMENTS</span>
                </div>
                <div className="row-span-5 w-full h-full bg-gray-700 overflow-auto">
                    {requirementsList.map((requirement: Requirement) => (
                        <div key={index++} className="grid grid-cols-3 w-full">
                            <div className="col-span-2 p-3" dangerouslySetInnerHTML={{ __html: requirement.name }} />
                            <div className="col-span-1 flex justify-end items-center p-3">
                                <meter className="h-3" value={20} min={0} max={100}></meter>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default QuestRequirements;