import React, { useEffect, useState} from "react";
import toast, { Toaster } from 'react-hot-toast';

import ScoreCard from "../components/ScoreCard";

function Home() {
    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    const [winner, setWinner] = useState(null);

    const MAX_SCORE = 5;

    useEffect(()=>{
        if(scoreA< MAX_SCORE && scoreB< MAX_SCORE){
            
            return;
        }

        if (scoreA ===  MAX_SCORE) {
            setWinner("Angad");
            toast.success("Angad wins!🎉");
        }

        if (scoreB ===  MAX_SCORE){
            setWinner("Yogesh");
            toast.success("Yogesh wins!🎉")
        }
    }, [scoreA, scoreB]);
  return (
    <div className="bg-blue-100 min-h-screen p-10">
        <h1 className="text-center text-3xl md:text-5xl py-4 md:py-10 border-2 border-blue-500 border-dashed
         rounded-md text-blue-500 bg-white">
            Score Keeper</h1>
            

            <div className="flex flex-col md:flex-row justify-center md:justify-around md:mt-10">
               <ScoreCard score={scoreA} teamName="Angad" increaseScore={()=>{
                
                setScoreA(scoreA + 1);
               }}
               decreaseScore={()=>{
              
                setScoreA(scoreA - 1);
               }} 
               winner={winner}/>
                   
               <ScoreCard score={scoreB} teamName="Yogesh" increaseScore={()=>{
               
                setScoreB(scoreB + 1);
            }}
            decreaseScore={()=>{
                
             setScoreB(scoreB - 1);
               }}
               winner={winner}/>
            </div>

             {winner ? (
            <p className="text-center text-2xl">
                Winner is <b className="underline decoration-wavy mx-4 bg-yellow-400 px-2 py-1">{winner}🏆🏆🏆.</b>Click reset to start again.
            </p>
            ) : null}
            <div className="flex justify-center mt-4 md:mt-10">
                <button className="bg-blue-500 px-10 py-3 text-2xl md:text-5xl text-white rounded-lg shadow-lg"
                 onClick={() => {
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null);
                }}>
                    Reset
                </button>
            </div>
            <Toaster/>
    </div>
  );
}

export default Home;