import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const Mullion = ({ key }) => {
  const [height, setHeight] = useState(60);
  const [width, setWidth] = useState(12);
  const [turn, setTurn] = useState(false);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    background: 'skyblue',
  };

  return (
    <Rnd
      dragGrid={[1, 1]}
      bounds='parent'
      style={style}
      default={{
        x: 190,
        y: 70,
      }}
      size={{ width: '18px', height: height * 4.5 || 60 * 4.5 }}>
      <input
        style={{
          transform: 'rotate(-90deg)',
          width: '50px',
          marginTop: '50%',
          border: 'none',
          background: 'transparent',
        }}
        onBlur={(e) => setHeight(e.target.value)}
        type='text'
        name=''
        id=''
        placeholder={height || 60}
      />
    </Rnd>
  );
};

export default Mullion;
