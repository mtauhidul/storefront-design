import React, { useState } from 'react';
import { Rnd } from 'react-rnd';

const Card = ({ key }) => {
  const [height, setHeight] = useState(60);
  const [width, setWidth] = useState(40);
  const [title, setTitle] = useState('Window');
  const [price, setPrice] = useState(0);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '1px solid lightgrey',
    background: '#f0f0f0',
  };

  const textSize = width / 2;
  const text2Size = width / 3;
  // const aroundSpace = height / 24;

  return (
    <Rnd
      resizeGrid={[1, 1]}
      dragGrid={[1, 1]}
      bounds='parent'
      style={style}
      default={{
        x: 0,
        y: 70,
      }}
      size={{
        width: width * 4.5 || 40 * 4.5,
        height: height * 4.5 || 60 * 4.5,
      }}>
      <div style={{ textAlign: 'center' }}>
        <h2
          contentEditable='true'
          onChange={(e) => setTitle(e.target.value)}
          style={{
            padding: '5px',
            cursor: 'auto',
            fontSize: `${textSize}px`,
          }}>
          {title}
        </h2>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <input
            onBlur={(e) => setHeight(e.target.value)}
            style={{
              maxWidth: '50px',
              textAlign: 'center',
              border: 'none',
              background: 'inherit',
              color: 'black',
              fontSize: '18px',
            }}
            type='text'
            placeholder={height || 60}
          />
          <small>X</small>
          <input
            onBlur={(e) => setWidth(e.target.value || 40)}
            style={{
              maxWidth: '50px',
              textAlign: 'center',
              border: 'none',
              background: 'inherit',
              color: 'black',
              fontSize: '18px',
            }}
            type='text'
            placeholder={width || 40}
          />
        </div>
        <div style={{ height: '10px' }}></div>
        <small
          style={{
            color: 'indigo',
            fontSize: `${text2Size}px`,
          }}>
          $
          <input
            onBlur={(e) => setPrice(e.target.value)}
            style={{
              cursor: 'auto',
              maxWidth: '40px',
              border: 'none',
              background: 'transparent',
              fontSize: '18px',
            }}
            type='text'
            placeholder={price || 100}
          />
          /mo
        </small>
      </div>
    </Rnd>
  );
};

export default Card;
