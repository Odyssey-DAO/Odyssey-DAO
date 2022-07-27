import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Quest, { QuestProps } from '../components/Quest';
import QuestDetails, { DetailsProps } from '../components/QuestDetails';
import QuestRequirements, { RequirementsProps } from '../components/QuestRequirements';

const Challenges: NextPage = () => {
  const [quests, setQuests] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState("");
  const [questHeader, setQuestHeader] = useState("No Quest Selected");
  const [questDescription, setQuestDescription] = useState("Please select a Quest from the left column");
  const [questRequirements, setQuestRequirements] = useState([]);

  useEffect(() => {
    fetch(`/api/fetchQuests`)
    .then(response => response.json())
    .then(data => {
      setQuests(data);
      console.log("Quests received:", data);
      console.log("Quests set:", quests);
    });
  }, []);

  useEffect(() => {
    if (selectedQuest !== "") {
      const quest: any = quests.find((element: QuestProps) => element.id === selectedQuest);
      console.log("Quest found:", quest);
      if (quest) {
        setQuestHeader(quest.name);
        setQuestDescription(quest.description);
        setQuestRequirements(quest.requirements);
      }
    }
  }, [selectedQuest]);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 h-screen bg-black text-white">
        <div className='border-4 row-span-2 h-full overflow-auto'>
          {quests.map((quest: QuestProps) => (
            <Quest key={quest.id} id={quest.id} name={quest.name} summary={quest.summary} description={quest.description} image={quest.image} requirements={quest.requirements} setQuestId={setSelectedQuest} />
          ))}
        </div>
        <div className='border-4 h-full'>
          <QuestDetails header={questHeader} description={questDescription}></QuestDetails>
        </div>
        <div className='border-4 h-full'>
          <QuestRequirements requirementsList={questRequirements}></QuestRequirements>
        </div>
      </div>
    </>
  );
};

export default Challenges;
