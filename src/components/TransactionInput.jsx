import { useState } from "react";

function TransactionInput({ onAdd }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !type) return;

        const newTransaction = {
            id: crypto.randomUUID(),
            description,
            amount: parseFloat(amount),
            type,
            date: new Date().toLocaleString(), // auto timestamp
        };

        onAdd(newTransaction);
        setDescription("");
        setAmount("");
        setType("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300"
        >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Add New Transaction
            </h2>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Description"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded px-3 py-2 focus:outline-none transition-colors"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    placeholder="Amount"
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded px-3 py-2 focus:outline-none transition-colors"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <select
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 rounded px-3 py-2 focus:outline-none transition-colors"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="" disabled hidden className="text-gray-400 dark:text-gray-500">
                        Select an option
                    </option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
                Add Transaction
            </button>
        </form>
    );
}

export default TransactionInput;
