import React, { useState, useEffect } from 'react';
import Card from '../tarjeta/index';
import LogicAnswer from '../logiButton/index';
const Jugadores = () => {   
  const [jugador, setJugador] = useState([]); 

  useEffect(() => {
    const fetchdogis = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/games');
        const data = await response.json();                         
        setJugador(data);
      } catch (error) {
      }
    };

    fetchdogis();
  }, []);
  
  

  
  return (
    <div className="App">
      {jugador.map((j) => {
        return (
          <Card>
            <p>{j.title}</p>
            <LogicAnswer taskToUpdate={jugador} id={j.id}/>
          </Card>
        );
      })}
    </div>
  );
};

export default Jugadores;