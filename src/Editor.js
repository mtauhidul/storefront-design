import React, { useState } from 'react';
import Card from './Card';
import './index.css';
import Mullion from './Mullion';

const Editor = () => {
  const [list, setList] = useState([0]);
  const [bar, setBar] = useState([0]);

  const addComponent = () => {
    setList([...list, list.length]);
  };
  const addBar = () => {
    setBar([...bar, bar.length]);
  };
  return (
    <div id='parent'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {' '}
        <button onClick={addComponent} id='addBox'>
          Add Box
        </button>
        <button onClick={addBar} id='addBox'>
          Add Mullion
        </button>
      </div>
      {list.map((id) => (
        <Card key={id} />
      ))}
      {bar.map((id) => (
        <Mullion key={id} />
      ))}
    </div>
  );
};

export default Editor;
