import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// const BASE_URL = "api/v1/";
const BASE_URL_V1 = import.meta.env.VITE_BASE_URL_V1;
console.log(`========BASE_URL_V1======`, BASE_URL_V1);

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const addIncome = async (incomes) => {
    const response = await axios
      .post(`${BASE_URL_V1}admin/income/create`, incomes, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    getListIncome();
  };

  const getListIncome = async () => {
    const response = await axios.get(`${BASE_URL_V1}admin/income/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setIncomes(response.data.data);

    console.log(`========response.data======`, response.data.data);
  };

  const deleteIncome = async (id) => {
    const response = await axios.delete(
      `${BASE_URL_V1}admin/income/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
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
      .post(`${BASE_URL_V1}admin/expense/create`, expenses, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        setError(err.response.data.message);
      });

    getListExpense();
  };

  const getListExpense = async () => {
    const response = await axios.get(`${BASE_URL_V1}admin/expense/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setExpenses(response.data.data);

    console.log(`========response.data======`, response.data.data);
  };

  const deleteExpense = async (id) => {
    const response = await axios.delete(
      `${BASE_URL_V1}admin/expense/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
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
    return totalIncome() - totalExpense();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  const loginUser = async (data) => {
    const response = await axios.post(`${BASE_URL_V1}admin/auth/login`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`========response======`, response);

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      setUser(response.data.user);
    } else {
      alert(response.message || "Login failed");
    }

    // return res.json();
  };

  const registerUser = async (data) => {
    const res = await axios.post(`${BASE_URL_V1}admin/auth/register`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.message === "User registered successfully") {
      alert("Signup successful! Please login.");
    } else {
      alert(res.message);
    }
    // return res.json();
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

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
        transactionHistory,
        loginUser,
        registerUser,
        logout,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
