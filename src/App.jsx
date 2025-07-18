import { useState, useEffect } from "react";
import SummaryCard from "./components/SummaryCard";
import TransactionInput from "./components/TransactionInput";
import TransactionList from "./components/TransactionList";
import TransactionCharts from "./components/TransactionCharts";

export default function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true" || false;
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const addTransaction = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8 transition-colors duration-300">
      {/* Dark mode toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-sm text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Personal Finance Dashboard</h1>

      <div className="max-w-6xl mx-auto space-y-8">
        <SummaryCard transactions={transactions} />
        <TransactionInput onAdd={addTransaction} />

        {/* Charts and History side by side */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <TransactionCharts transactions={transactions} />
          </div>
          <div className="md:w-1/2">
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          </div>
        </div>
      </div>
    </main>
  );
}

