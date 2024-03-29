import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Quest, { QuestProps } from '../components/Quest';
import QuestDetails, { DetailsProps } from '../components/QuestDetails';
import QuestRequirements, { RequirementsProps } from '../components/QuestRequirements';
import { AppContext } from '.';

const Challenges: NextPage = () => {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  const [networkId, setNetworkId] = useState(undefined);

  const [airTokenBalance, setAirTokenBalance] = useState(undefined);

  const [quests, setQuests] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState("");
  const [questHeader, setQuestHeader] = useState("No Quest Selected");
  const [questDescription, setQuestDescription] = useState("Please select a Quest from the left column");
  const [questImage, setQuestImage] = useState("");
  const [questRequirements, setQuestRequirements] = useState([]);

  const contextObject = {
    provider,
    setProvider,
    signer,
    setSigner,
    signerAddress,
    setSignerAddress,
    networkId,
    setNetworkId,
  };

  useEffect(() => {
    if (signerAddress) {
      fetch(`/api/polygon?wallet_address=${signerAddress}`)
        .then((response) => response.json())
        .then((data) => {
          setAirTokenBalance(data);
        });
    }
  }, [signerAddress]);

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
        setQuestImage(quest.image);
        setQuestRequirements(quest.requirements);
      }
    }
  }, [selectedQuest]);

  return (
    <AppContext.Provider value={contextObject}>
      <Nav />
      <div className="grid grid-cols-2 grid-rows-2 gap-1 h-screen bg-black text-white">
        <div className='border-4 row-span-2 h-full overflow-auto'>
          {quests.map((quest: QuestProps) => (
            <Quest key={quest.id} id={quest.id} name={quest.name} summary={quest.summary} description={quest.description} image={quest.image} requirements={quest.requirements} setQuestId={setSelectedQuest} />
          ))}
        </div>
        <div className='border-4 h-full'>
          <QuestDetails header={questHeader} description={questDescription} image={questImage}></QuestDetails>
        </div>
        <div className='border-4 h-full'>
          <QuestRequirements requirementsList={questRequirements}></QuestRequirements>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Challenges;
