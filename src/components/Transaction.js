import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {/* to avoid double minus sign */}
          {sign}
          {Math.abs(transaction.amount)} €
        </span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
          &times;
        </button>
      </li>
    </div>
  );
};
