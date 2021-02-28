import React from 'react';
import style from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        {items.map(el => {
          const { id, type, amount, currency } = el;
          return (
            <tbody key={id}>
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
