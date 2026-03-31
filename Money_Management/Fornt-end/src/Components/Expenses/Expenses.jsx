import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
import { useGlobalContext } from "../../context/globalContext";
import IncomeItem from "../IncomeItem/IncomeItem";
import ExpenseFrom from "./ExpenseFrom";

const Expenses = () => {
  const { addExpense, expenses, getListExpense, deleteExpense, totalExpense } =
    useGlobalContext();

  useEffect(() => {
    getListExpense();
  }, []);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h2>Expenses</h2>
        <h3 className="total-expense">
          Total Expenses: <span>${totalExpense()}</span>
        </h3>
        <div className="expense-content">
          <div className="form-container">
            <ExpenseFrom />
          </div>
          <div className="expenses">
            {expenses.map((expense) => {
              const { _id, title, amount, date, category, description, type } =
                expense;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .expense-content {
    display: flex;
    gap: 2rem;
    .expenses {
      flex: 1;
    }
  }
`;

export default Expenses;
