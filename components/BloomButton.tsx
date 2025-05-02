import React from 'react';

const BloomButton: React.FC = () => {
  return (
    <button className="bg-none border-none cursor-pointer group">
      <div className="relative transition-all duration-200 ease-in-out border-none bg-none group-hover:scale-110 group-active:scale-70">
        <div className="w-[110px] aspect-square rounded-full overflow-hidden relative grid place-content-center border-r-5 border-white border-l-5 border-l-[rgba(128,128,128,0.147)] transform -rotate-45 transition-all duration-500 ease-in-out">
          <div className="h-[60px] aspect-square rounded-full relative shadow-[rgba(100,100,111,0.5)_-10px_5px_10px_0px] transition-all duration-500 ease-in-out group-active:scale-120">
            <div className="absolute inset-0 rounded-full bg-[linear-gradient(60deg,rgb(1,85,103)_0%,rgb(147,245,255)_100%)]"></div>
            <div className="absolute inset-[5px] rounded-full bg-[linear-gradient(60deg,rgb(0,103,140)_0%,rgb(58,209,233)_100%)] grid place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-white opacity-50 w-[30px] aspect-square transform rotate-45 transition-all duration-200 ease-in group-hover:opacity-100 group-hover:filter group-hover:drop-shadow-[0_0_10px_white]"
                viewBox="0 0 384 512"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM64 224H88c30.9 0 56 25.1 56 56s-25.1 56-56 56H80v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H80v48h8zm72-64c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16h-8v96zm96-128h24c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm24 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v48h8z"/>
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.888)_100%)] transform translate-y-[-50%] rotate-0 origin-bottom transition-all duration-500 ease-in-out group-hover:translate-y-[-40%]"></div>
        </div>
        <div className="absolute h-[1px] w-[1px] bg-white top-[10px] right-[20px] shadow-[rgb(255,255,255)_0px_0px_10px_10px,rgb(255,255,255)_0px_0px_20px_20px]"></div>
        <div className="absolute h-[1px] w-[1px] bg-white bottom-[10px] left-[20px] shadow-[rgba(255,255,255,0.5)_0px_0px_10px_10px,rgba(255,255,255,0.5)_0px_0px_30px_20px]"></div>
      </div>
    </button>
  );
};

export default BloomButton;