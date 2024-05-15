import React from 'react';

const ButtonComponents = ({ tipo, onClick }) => {
  const buttonStyles = {
    AGREGAR:    { backgroundColor: 'green'},
    BORRAR:     { backgroundColor: 'red' },
  };

  return (
    <button style={buttonStyles[tipo]} onClick={onClick}>
      {tipo}
    </button>
  );
};

export default ButtonComponents;