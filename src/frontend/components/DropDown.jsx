import React from 'react';
import '../assets/styles/components/DropDown.styl';

const DropDown = ({ items, label, param, callBack }) => {

  return (
    <div className='container'>
      <select className='select' onChange={(e) => callBack(e, param)}>
        <option value=''>{label}</option>
        {
          items
            .filter((f) => f.value !== '')
            .map((d, i) => (
              <option key={i.toString()} id={d.key} value={d.key}>
                {d.value}
              </option>
            ))
        }
      </select>
    </div>
  );
};

export default DropDown;
