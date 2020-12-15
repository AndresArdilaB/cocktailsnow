import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { filterByName, orderByName } from '../actions';
import DropDown from './DropDown';
import '../assets/styles/components/Filters.styl';

const Filters = ({ filters, isHome, filterByName, orderByName }) => {
  const history = useHistory();

  const setFilter = (key, param) => {
    history.push(`/results/${param}/${key.target.value}`);
  };

  const handleFilterByName = (text) => {
    filterByName(text.target.value);
  };

  const handleOrder = (e, type) => {
    e.preventDefault();
    orderByName(type);
  };

  const orderButton = (type) => (
    <span
      className='order_button'
      onClick={(e) => handleOrder(e, type)}
      role='button'
      tabIndex={0}
    >
      {type === 'asc' ? 'Asc' : 'Desc'}
    </span>
  );

  return (
    <section className='filters__main'>
      <div className='filters__title'>
        Find your cocktail by some of this parameters
      </div>
      <section className='filters'>
        {
          //Aqui recibimos el arreglo que enviamos al estado con los filtros
          //Y los podemos generar con un map para evitar repetir codigo llamando
          //DropDown cada que queramos crear un filtro
          filters.map((d, i) => (
            <DropDown
              key={i.toString()}
              items={d.items}
              label={d.label}
              param={d.param}
              callBack={setFilter}
            />
          ))
        }
      </section>
      {
        !isHome && <input type='text' className='search' placeholder='Find by name in this list...' onChange={handleFilterByName} />
      }

      {
        !isHome && (
          <div
            className='order_container'
          >
            Order by name:
            {orderButton('asc')}
            |
            {orderButton('desc')}
          </div>
        )
      }
    </section>
  );
};

const mapDispatchToProps = {
  filterByName,
  orderByName,
};

export default connect(null, mapDispatchToProps)(Filters);
