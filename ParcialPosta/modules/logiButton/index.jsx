import React, { useState } from 'react';
import ButtonComponents from '../button/index';
import { Link } from 'react-router-dom';

const LogicAnswer = (taskToUpdate, id) => {

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    categore: '',
  });

  const handleClick = (operation) => {
    switch (operation) {
      case 'DETALLES':
        console.log("DETALLES")
        break;
      default:
        break;
    }
  };

 

  return (
    <div>
      <div>
        <Link to={"/update"} state={{ task: taskToUpdate }}>
          <ButtonComponents tipo="DETALLES" onClick={() => handleClick('DETALLES')} to={"/update"}/>
        </Link>
      </div>
    </div>
  );
};

export default LogicAnswer;