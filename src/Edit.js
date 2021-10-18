import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Edit = ({ setHeight, setWidth, setTitle, smt, smr, smb, sml, width }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const btnWidth = (width / 3) * 2;
  const fontWidth = btnWidth / 10;

  return (
    <div>
      <button
        style={{
          padding: '5px 7px',
          fontSize: `${fontWidth}px`,
          fontWeight: 400,
          cursor: 'pointer',
          width: btnWidth,
        }}
        onClick={onOpenModal}>
        Measurements
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
        <h3
          style={{
            margin: '7px auto',
            fontWeight: '400',
            textAlign: 'center',
          }}>
          Mullions
        </h3>
        <hr />
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <input
            type='number'
            name='mullion'
            id='mullion'
            placeholder='Top'
            onBlur={(e) => smt(e.target.value)}
            style={{
              height: '40px',
              fontSize: '16px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
          />
          <input
            type='number'
            name='mullion'
            id='mullion'
            placeholder='Right'
            onBlur={(e) => smr(e.target.value)}
            style={{
              height: '40px',
              fontSize: '16px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
          />
          <input
            type='number'
            name='mullion'
            id='mullion'
            placeholder='Bottom'
            onBlur={(e) => smb(e.target.value)}
            style={{
              height: '40px',
              fontSize: '16px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
          />
          <input
            type='number'
            name='mullion'
            id='mullion'
            placeholder='Left'
            onBlur={(e) => sml(e.target.value)}
            style={{
              height: '40px',
              fontSize: '16px',
              textAlign: 'center',
              border: '1px solid lightgray',
              borderRadius: '2px',
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Edit;
