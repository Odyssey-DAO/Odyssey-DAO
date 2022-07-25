import React from 'react';

function ListCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[50%]">
        <div className="container text-white font-bold flex items-center gap-x-11 p-7 mt-8 bg-black border-4 rounded-xl border-yellow-700">
          <span className="font-black text-4xl">1 </span>
          <p className="font-medium text-2xl">
            Join community throught discord
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
