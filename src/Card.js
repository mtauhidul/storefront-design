import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Edit from './Edit';

const Card = ({ key }) => {
  const [height, setHeight] = useState(280);
  const [width, setWidth] = useState(220);
  const [title, setTitle] = useState('Window');

  const [mt, smt] = useState(0);
  const [mr, smr] = useState(0);
  const [mb, smb] = useState(0);
  const [ml, sml] = useState(0);

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTop: `${mt}px solid skyblue`,
    borderRight: `${mr}px solid skyblue`,
    borderBottom: `${mb}px solid skyblue`,
    borderLeft: `${ml}px solid skyblue`,
    background: '#f0f0f0',
  };

  const textSize = width / 10;
  const text2Size = width / 12;
  const aroundSpace = height / 24;

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
      size={{ width: width, height: height }}>
      <div style={{ textAlign: 'center' }}>
        <h2
          style={{
            padding: '5px',
            cursor: 'auto',
            fontSize: `${textSize}px`,
            margin: aroundSpace,
          }}>
          {title}
        </h2>
        <small style={{ fontSize: `${text2Size}px` }}>
          {height || 280} x {width || 220}
        </small>
      </div>

      <Edit
        setTitle={setTitle}
        setHeight={setHeight}
        setWidth={setWidth}
        smt={smt}
        smr={smr}
        smb={smb}
        sml={sml}
        width={width}></Edit>
    </Rnd>
  );
};

export default Card;
