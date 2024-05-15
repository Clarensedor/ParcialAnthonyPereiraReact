import React, { useState } from 'react';
import Columna from '../column';
import { useLocation } from 'react-router-dom'
import ButtonComponents from '../button/index';
import { Link } from 'react-router-dom';


const handleClick = (operation) => {
    console.log(operation)
  };

const UpdateTask = () => {
    //pa obtener el detalle
    const location = useLocation()
    let { task } = location.state
    return(
        <>
        <Columna
            key={task.id}
            id={task.id}
            propTitle={task.title}
            propDescription={task.description}
            propCategorie={task.categorie}
            isEdit={true}
        />
      <Link to={"/"}>
        <ButtonComponents tipo="VOLVER" onClick={() => handleClick('VOLVER')}/>
     </Link>
    </>
    )

}

export default UpdateTask;