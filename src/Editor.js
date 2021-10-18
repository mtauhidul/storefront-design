import React, { useState } from 'react';
import Card from './Card';
import './index.css';

const Editor = () => {
  const [list, setList] = useState([0]);

  const addComponent = () => {
    setList([...list, list.length]);
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
      </div>
      {list.map((id) => (
        <Card key={id} />
      ))}
    </div>
  );
};

export default Editor;
