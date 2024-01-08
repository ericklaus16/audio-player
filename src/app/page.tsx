"use client"
import React, { useEffect, useState } from 'react';
import { questions } from '@/questions/db';
import Question from '@/components/Question';
import '../styles/landing.css';

export default function Home() {
  const [currQuestion, setQuestion] = useState<number>(0)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)

  const StartGame = () => {
    setWin(false)
    setGameOver(false)
    setQuestion(0)
    questions.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    StartGame()
  }, [])

  const lose = () => {
    setGameOver(true)
  }

  useEffect(() => {if(win){setQuestion(currQuestion + 1)}}, [win])

  return (
    <div>
      {!gameOver && !win && ( 
        <Question 
          key={currQuestion} 
          pergunta={questions[currQuestion].pergunta} 
          opcoes={questions[currQuestion].opcoes}
          acerto={() => currQuestion != questions.length - 1 ? setQuestion(currQuestion + 1) : setWin(true)}
          erro={() => lose()}
        />
      )}
      {gameOver && (
        <div className='container'>
          <p className='gameOverText'>O jogo acabou!</p>
          <p className='acertos'>Você obteve um score de {currQuestion} perguntas</p>
          <button onClick={() => StartGame()}>Tentar Novamente</button>
        </div>
      )}
      {win && (
        <div className='container'>
          <p className='acertos'>Parabéns, você ganhou!</p>
          <p className='acertos'>Você obteve um score de {currQuestion} perguntas</p>
          <button onClick={() => StartGame()}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}
