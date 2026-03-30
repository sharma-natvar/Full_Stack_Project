import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "https://money-manage-krmx.onrender.com/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (incomes) => {
    const response = await axios
      .post(`${BASE_URL}admin/income/create`, incomes)
      .catch((err) => {
        setError(err.response.data.message);
      });

    getListIncome();
  };

  const getListIncome = async () => {
    const response = await axios.get(`${BASE_URL}admin/income/list`);

    setIncomes(response.data.data);

    console.log(`========response.data======`, response.data.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(`${BASE_URL}admin/income/delete/${id}`);
    getListIncome();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const addExpense = async (expenses) => {
    const response = await axios
      .post(`${BASE_URL}admin/expense/create`, expenses)
      .catch((err) => {
        setError(err.response.data.message);
      });

    getListExpense();
  };

  const getListExpense = async () => {
    const response = await axios.get(`${BASE_URL}admin/expense/list`);

    setExpenses(response.data.data);

    console.log(`========response.data======`, response.data.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(
      `${BASE_URL}admin/expense/delete/${id}`,
    );
    getListExpense();
  };

  const totalExpense = () => {
    let totalExpense = 0;
    expenses.forEach((expense) => {
      totalExpense = totalExpense + expense.amount;
    });

    return totalExpense;
  };

  console.log(`========totalExpense()======`, totalExpense());

      const totalBalance = () => {
        return totalIncome() - totalExpense()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getListIncome,
        incomes,
        deleteIncome,
        totalIncome,
        totalExpense,
        deleteExpense,
        getListExpense,
        addExpense,
        expenses,
        totalBalance,
        transactionHistory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
