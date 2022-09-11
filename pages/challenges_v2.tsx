import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Quest, { QuestProps } from '../components/Quest';
import QuestDetails_v2, { DetailsProps_v2 } from '../components/QuestDetails_v2';
import QuestRequirements, { RequirementsProps } from '../components/QuestRequirements';
import { AppContext } from '.';

const Challenges_v2: NextPage = () => {
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
      <div className='bg-black text-white pt-3 pb-5 pl-7'>
        <span className='text-4xl'>Challenges</span>
      </div>
      <div className="h-screen grid grid-cols-2 grid-rows-1 bg-black text-white">
        <div className='h-full grid grid-cols-3 grid-rows-3 justify-self-center items-center'>
          {quests.map((quest: QuestProps) => (
            <img key={quest.id} src={quest.image} className="w-48" onClick={() => setSelectedQuest(quest.id)}></img>
          ))}
        </div>
        <div className='h-full flex justify-center items-center'>
          <QuestDetails_v2 header={questHeader} description={questDescription} image={questImage}></QuestDetails_v2>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Challenges_v2;
