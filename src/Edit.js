import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Edit = ({
  setHeight,
  setWidth,
  setTitle,
  setPrice,
  smt,
  smr,
  smb,
  sml,
  width,
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const btnWidth = (width / 6) * 2;
  const fontWidth = btnWidth / 5;

  return (
    <div>
      <button
        style={{
          padding: '5px 7px',
          fontSize: `${fontWidth}px`,
          fontWeight: 400,
          cursor: 'pointer',
          width: btnWidth,
          borderRadius: '6px',
        }}
        onClick={onOpenModal}>
        Edit
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <br />
        <br />
        <input
          placeholder='Title'
          type='text'
          name='title'
          id='title'
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            fontSize: '18px',
            textAlign: 'center',
            border: '1px solid lightgray',
            borderRadius: '2px',
            display: 'inline-block',
          }}
        />
        <br />
        <input
          placeholder='Price'
          type='text'
          name='price'
          id='price'
          onBlur={(e) => setPrice(e.target.value)}
          style={{
            width: '61%',
            height: '40px',
            fontSize: '18px',
            textAlign: 'center',
            border: '1px solid lightgray',
            borderRadius: '2px',
            display: 'inline-block',
          }}
        />
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '260px',
            margin: '0 auto',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <br />
          <input
            placeholder='Height'
            style={{
              width: '80%',
              height: '40px',
              marginRight: '5px',
              fontSize: '18px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
            onBlur={(e) => setHeight(e.target.value)}
            type='number'
            name=''
            id=''
          />
          <h2 style={{ fontWeight: '400' }}> X </h2>
          <input
            placeholder='Width'
            style={{
              width: '80%',
              height: '40px',
              marginLeft: '5px',
              fontSize: '18px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
            onBlur={(e) => setWidth(e.target.value)}
            type='number'
            name=''
            id=''
          />
        </div>
      </Modal>
    </div>
  );
};

export default Edit;
