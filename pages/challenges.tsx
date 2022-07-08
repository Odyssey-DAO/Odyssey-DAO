import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Quest, { QuestProps } from '../components/Quest';

const Challenges: NextPage = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    fetch(`/api/fetchQuests`)
    .then(response => response.json())
    .then(data => {
      setQuests(data);
      console.log("Quests received:", data);
      console.log("Quests set:", quests);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-screen">
      <div className='border-4 row-span-2 h-full'>
        {quests.map((quest: QuestProps) => (
          <Quest key={quest.id} id={quest.id} name={quest.name} summary={quest.summary} description={quest.description} requirements={quest.requirements} />
        ))}
      </div>
      <div className='border-4 h-full'>
        Placeholder for Quest description
      </div>
      <div className='border-4 h-full'>
        Placeholder for Quest requirements
      </div>
    </div>
  );
};

export default Challenges;
