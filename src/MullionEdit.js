import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const MullionEdit = ({
  setHeight,
  setWidth,
  setTitle,
  smt,
  smr,
  smb,
  sml,
  width,
}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <button
        style={{
          cursor: 'pointer',
          width: '5px',
          height: '5px',
          border: '1px solid grey',
          padding: '7px',
          borderRadius: '4px',
          background: 'skyblue',
        }}
        onClick={onOpenModal}></button>
      <Modal open={open} onClose={onCloseModal} center>
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

export default MullionEdit;
