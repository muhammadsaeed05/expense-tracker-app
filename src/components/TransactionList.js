import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};
