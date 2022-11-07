// import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/Navbar';
import Card from '../components/Card';
import ListCard from '../components/ListCard';
import { ethers } from 'ethers';
import { useEffect, useState, createContext } from 'react';

export const AppContext = createContext<{} | null>(null);

// const Home: NextPage = () => {
const Home = () => {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSignerAddress] = useState(undefined);
  const [networkId, setNetworkId] = useState(undefined);

  const [airTokenBalance, setAirTokenBalance] = useState(undefined);

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
    console.log('In index.js', provider, signer, signerAddress, networkId);
  }, [networkId]);

  useEffect(() => {
    if (signerAddress) {
      fetch(`/api/polygon?wallet_address=${signerAddress}`)
        .then((response) => response.json())
        .then((data) => {
          setAirTokenBalance(data);
        });
    }
  }, [signerAddress]);

  return (
    <AppContext.Provider value={contextObject}>
      <div className="bg-[#0B1224]">
        <Head>
          <title>Odyssey Game: Play to learn web3</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="font-body">
          <Nav />

          <div className="relative bg-[url('/hero.png')] h-auto min-w-screen bg-cover bg-on-repeat bg-center bg-90% flex flex-col-reverse md:flex-col min-h-screen py-2 justify-center">
            <div className="flex justify-center m-10 md:justify-end md:p-8 absolute top-0 right-0">
              <div className="flex flex-col justify-end w-[300px]">
                <div className="flex justify-between">
                  <p className=" font-bold text-white text-lg">
                    Mission Progress
                  </p>
                  <img src="/CoinVertical.png" alt="coin" />
                  <p className="font-bold text-white text-2xl">
                    {airTokenBalance ? airTokenBalance : '...'} $AIR
                  </p>
                </div>
                <div className="grid grid-flow-col justify-between mt-2">
                  <div className="w-[250px] inline col-span-4">
                    <p className="font-bold text-white">hr</p>
                  </div>
                  <div className="col-span-4">
                    <p className="font-bold text-white text-lg">0 %</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h1 className="mb-3 text-3xl font-bold text-center text-white md:text-6xl lg:text-8xl">
                Maiden Voyage
              </h1>
              <h4 className="text-white font-bold md:text-4xl xm:text sm:text-base">
                By Odysses DAO
              </h4>
              <p className="text-white font-bold md:text-xl xm:text sm:text-base opacity-75 mt-3">
                Play and Learn Web3.
              </p>
              <p className="text-white font-bold md:text-xl xm:text sm:text-base opacity-75">
                Discover Web3 space by doing simple tasks in blockchain (Polygon
                Mumbai testnet for now).
              </p>
              <p className="text-white font-bold md:text-xl xm:text sm:text-base opacity-75">
                It's free to play. Login with Metamask wallet to get started.
              </p>
              <div className="content-center">
                <Link href="/challenges">
                  <button className="w-[200px] md:w-[300px] text-white text-center text-xs md:text-xl  border-4 border-white-800 h-auto rounded-full m-4 p-3 md:m-5 md:p-4 uppercase font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 md:h-10 md:w-10 inline "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {'  '} Start Adventure
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* about us section */}
          <div className="flex flex-col md:flex-row md:gap-8 container mx-auto px-4 md:justify-center mt-8 pb-32">
            <Card
              image={'art1.png'}
              head={'Learn and Play'}
              short1={'solving the tasks with fun'}
              short2={' '}
            />
            <Card
              image={'art2.png'}
              head={'Get Cool Nfts'}
              short1={'Create and mint your'}
              short2={'own NFts designed by you'}
            />
            <Card
              image={'art3.png'}
              head={'Be part of community'}
              short1={'Find a friend and join the'}
              short2={'vibrant of web3 community'}
            />
          </div>

          {/* sstart your journey section */}
          <div className="flex items-center justify-center">
            <p className="font-bold text-6xl text-center text-yellow-700">
              Start your journey
            </p>
          </div>

          <div className="flex flex-col md:flex-row container mt-8 pb-32 mx-auto gap-5 lg:w-[1150px]">
            {/* FIRST DIV */}
            <div className="flex flex-col gap-2 lg:w-[462px]">
              <div className="bg-[#22293f] text-white">
                <h2 className="font-normal text-2xl my-5 text-center">
                  MISSION
                </h2>
              </div>
              <div className="flex gap-3 bg-gray-700 text-white py-8">
                <div className="">
                  <img className="" src="/mission-icon.png" alt="task image" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg">TOPIC</h2>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-700 text-white py-8">
                <div className="">
                  <img className="" src="/mission-icon.png" alt="task image" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg">TOPIC</h2>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-700 text-white py-8">
                <div className="">
                  <img className="" src="/mission-icon.png" alt="task image" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg">TOPIC</h2>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-700 text-white py-8">
                <div className="">
                  <img className="" src="/mission-icon.png" alt="task image" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg">TOPIC</h2>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, consectetur.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 bg-gray-700 text-white py-8">
                <div className="">
                  <img className="" src="/mission-icon.png" alt="task image" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-lg">TOPIC</h2>
                  <p className="text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Alias, consectetur.
                  </p>
                </div>
              </div>
            </div>

            {/* SECOND DIV */}
            <div className="lg:w-[688px]">
              <div className="bg-[#151a2e]">
                <h3 className="uppercase text-white">
                  Prepare your spacecraft
                </h3>
              </div>
              <div className="cover">
                <img
                  className="w-full bg-cover"
                  src="/prepare-for-launch.png"
                  alt="ship image"
                />
              </div>
              <div className="text-white">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Saepe vel, molestiae fugit eligendi aspernatur accusamus ea
                  incidunt! Id enim iusto laboriosam rerum labore sint minus ut
                  delectus aut? Dolore non, deserunt alias temporibus laudantium
                  pariatur et? Mollitia fugit eligendi libero.
                </p>
              </div>
              <div className="bg-[#151a2e]">
                <h3 className="uppercase text-white">
                  Prepare your spacecraft
                </h3>
              </div>
              <div className="text-white">
                <div className="flex gap-5">
                  <p>Get MetaMask</p>
                  <p>hr</p>
                </div>
                <div className="flex gap-5">
                  <p>Jooin Discord Server</p>
                  <p>hr</p>
                </div>
                <div className="flex gap-5">
                  <p>Create Private/Public Key</p>
                  <p>hr</p>
                </div>
                <div className="flex gap-5">
                  <p>Add Polygon Network</p>
                  <p>hr</p>
                </div>
                <div className="flex gap-5">
                  <p>Connect to the Ody webpage</p>
                  <p>hr</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* becoome an odysnat */}
        {/* <div className='container flex flex-col items-center'> */}
        <div className="lg:bg-[url('/Frame.png')] bg-cover bg-on-repeat bg-center relative justify-center items-center z-10 overflow-hidden">
          <div className="flex items-center justify-center">
            <p className="font-bold text-6xl text-center text-yellow-700">
              Become an Odynauts
            </p>
          </div>
          {/* <div className="bg-[url('/Frame.png')] bg-cover bg-on-repeat bg-center absolute"> */}
          {/* <div className='absolute z-[-3] w-full'>
            <img className='w-full cover' src='/Frame.png' />
          </div> */}
          <ListCard
            number={1}
            description={'Join community throught discord'}
          />
          <ListCard
            number={2}
            description={'Level up your skill with bootcamp'}
          />
          <ListCard
            number={3}
            description={'Get ready adventure with odyssey Maiden Voyage'}
          />
          <div className=" flex items-center justify-center mt-16">
            <div className="bg-[#F76E00] rounded-full py-4 px-10">
              <p className=" text-white font-bold text-lg px-8 ">
                Join Adventure
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}

        {/* testimony section */}
        <div className="mt-40 text-center">
          <h4 className="text-white font-bold text-3xl md:text-[44px]">
            Our Adventurer who are already landing jobs
          </h4>
        </div>
        <div className="container flex flex-wrap col-3 md:gap-8 mx-auto px-4 md:justify-center mt-8 pb-32">
          <div className="flex flex-col gap-8 justify-start">
            <div>
              <img src="/t1.png" alt="tweet" />
            </div>
            <div>
              <img src="/t3.png" alt="tweet" />
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <div>
              <img src="/t5.png" alt="tweet" />
            </div>
            <div>
              <img src="/t6.png" alt="tweet" />
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-start">
            <div>
              <img src="/t4.png" alt="tweet" />
            </div>
            <div>
              <img src="t2.png" alt="tweet" />
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Home;

// items-center justify-center
