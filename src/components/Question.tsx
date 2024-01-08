import React from 'react'
import '../styles/question.css'

type question = {
    pergunta: string;
    opcoes: {
        resposta: string;
        correta: boolean;
    }[];
    acerto: () => void;
    erro: () => void;
}

const Question = (props: question) => (
  <div className='question-container'>
    <h1>{props.pergunta}</h1>
    <div className='answers'>
      {props.opcoes.map((opcao, opcaoIndex) => (
        <button className='answer' key={opcaoIndex} onClick={() => opcao.correta ? props.acerto() : props.erro()}>{opcao.resposta}</button>
      ))}
    </div>
  </div>
);

export default Question;