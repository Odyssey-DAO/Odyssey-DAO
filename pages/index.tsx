import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Odyssey Game: Play to learn web3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="bg-[url('/hero.png')] h-auto min-w-screen bg-cover bg-on-repeat bg-center bg-90% flex min-h-screen items-center justify-center py-2">
        <div className="text-center ">
          <h1 className="mb-3 text-3xl font-bold text-center text-white md:text-5xl lg:text-8xl">
            Maiden Voyage
          </h1>
          <h4 className="text-white text-3xl">By Odysses DAO</h4>
          <div className=" content-center">
            <button className="w-[300px] text-white text-center text-xl  border-4 border-white-800 h-auto rounded-full m-6 p-5 uppercase font-bold">
              Start Adventure
            </button>
          </div>
        </div>
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold capitalize">Welcome to the Odyssey Game</h1>

        <p className="mt-3 text-2xl">
          Odyssey Game is a on-chain play & learn game
        </p>
      </main>
    </div>
  );
};

export default Home;
