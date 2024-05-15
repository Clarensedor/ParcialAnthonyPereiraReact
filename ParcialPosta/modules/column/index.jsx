import styled from 'styled-components';
import React, { useState, useEffect } from 'react';


const ColumnaContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ColumnaTitle = styled.h3`
  margin-top: 0;
  font-size: 18px;
`;

const ColumnaInfo = styled.p`
  margin: 8px 0;
`;


const Columna = ({ id, propTitle, propDescription, propCategorie, isEdit }) => {
  const [jugadorget, setJugador] = useState([]); 

  useEffect(() => {
    const fetchdogis = async () => {
      console.log(id);
      try {
        const response = await fetch('http://localhost:3000/api/games/'+ id);
        const data = await response.json();     
        console.log(data[id]);
        //aca queria pasar el fetch de solo el id para cargar los datos y no pude :c
      } catch (error) {
      }
    };

    fetchdogis();
  }, []);
 


  const [title, setTitle] = useState(propTitle)
  const [description, setDescription] = useState(propDescription)
  const [categorie, setCategorie] = useState(propCategorie)

  
  return (
    <>
    <ColumnaContainer>
      <ColumnaTitle>Descripcion: {isEdit ? <input
        onChange={e => setTitle(e.target.value)}
        value={title} /> : title}</ColumnaTitle>
      <ColumnaInfo>Jugadores: {isEdit ? <input
        onChange={e => setDescription(e.target.value)}
        value={description} /> : description}</ColumnaInfo>
      <ColumnaInfo>Categoria: {isEdit ? <input
        onChange={e => setCategorie(e.target.value)}
        value={categorie} /> : categorie}</ColumnaInfo>
    </ColumnaContainer>
    {isEdit && 
          <button onClick={() => updateTask(id, title, description, categorie)}>
          Modificar
        </button>
    }
   </>
  );
};

//hace el update no me funciono 
const updateTask = async (id, title, description, categorie) => {
  let task={
    id: id,
    title: title,
    description: description,
    categorie: categorie,
  }
  let url = "http://localhost:3000/api/games/"+id;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (response.ok) {
    } else {
      console.error("Ocurrió un error al actualizar la tarea");
      return null;
    }
  } catch (error) {
    console.error("Ocurrió un error:", error);
    return null;
  }
};

export default Columna;