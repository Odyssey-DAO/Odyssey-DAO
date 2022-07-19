import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Navbar';
import Card from '../components/Card';

const Home: NextPage = () => {
  return (
    <div className="bg-[#0B1224]">
      <Head>
        <title>Odyssey Game: Play to learn web3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='font-body'>
        <Nav />

        <div className="bg-[url('/hero.png')] h-auto min-w-screen bg-cover bg-on-repeat bg-center bg-90% flex flex-col-reverse md:flex-col min-h-screen py-2">
          <div className="flex justify-center m-10 md:justify-end md:p-8">
            <div className="flex flex-col justify-end w-[300px]">
              <div className="flex justify-between">
                <p className=" font-bold text-white text-lg">
                  Mission Progress
                </p>
                <img src="/CoinVertical.png" alt="coin" />
                <p className="font-bold text-white text-2xl">0 $AIR</p>
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
          <div className="text-center mt-20 md:mt-56">
            <h1 className="mb-3 text-3xl font-bold text-center text-white md:text-6xl lg:text-8xl">
              Maiden Voyage
            </h1>
            <h4 className="text-white font-bold md:text-4xl xm:text sm:text-base">
              By Odysses DAO
            </h4>
            <div className="content-center">
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
      </div>
    </div>
  );
};

export default Home;

// items-center justify-center
