import { NextPage } from "next";

export interface DetailsProps_v2 {
    header: string,
    description: string,
    image: string
};

const QuestDetails_v2: NextPage<DetailsProps_v2> = (details) => {
    const { header, description, image } = details;

    return (
        <div className="relative w-2/3 h-2/3">
            <div className="absolute h-full w-full flex justify-center">
                <img className="h-full" src={image}></img>
            </div>
            <div className="absolute inset-x-0 top-0 bg-gray-500 p-3 flex items-center justify-center">
                <div>{header}</div>
            </div>
            <div className="absolute inset-x-0 top-1/4 bg-gray-500 p-3 flex items-center justify-center">
                <div className="h-full grid grid-cols-2 grid-rows-2">
                    <div>Mission Progress</div>
                    <div className="flex justify-self-end">$ 0 AIR</div>
                    <div className="col-span-2">
                        <meter className="h-3 w-full" value={20} min={0} max={100}></meter>
                    </div>
                </div>
            </div>
            <div className="absolute inset-x-0 top-1/2 bg-gray-500 p-3 flex items-center justify-center">
                <div>{description}</div>
            </div>
        </div>
    );
};

export default QuestDetails_v2;