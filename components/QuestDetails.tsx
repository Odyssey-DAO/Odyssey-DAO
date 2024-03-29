import { NextPage } from "next";

export interface DetailsProps {
    header: string,
    description: string,
    image: string
};

const QuestDetails: NextPage<DetailsProps> = (details) => {
    const { header, description, image } = details;

    return (
        <>
            <div className="relative w-full h-full">
                <div className="absolute h-full w-full flex justify-center">
                    <img className="h-full" src={image}></img>
                </div>
                <div className="absolute inset-x-0 top-0 bg-gray-800 p-3 flex items-center justify-center">
                    <div>{header}</div>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gray-500 p-3 flex items-center justify-center">
                    <div>{description}</div>
                </div>
            </div>
        </>
    );
};

export default QuestDetails;