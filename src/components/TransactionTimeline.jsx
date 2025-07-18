// src/components/TransactionTimeline.jsx
import React from "react";
import { Trash2 } from "lucide-react";

const TransactionTimeline = ({ transactions, deleteTransaction }) => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
            <ul className="space-y-4">
                {transactions.map((tx) => (
                    <li
                        key={tx.id}
                        className="flex items-center justify-between p-4 border rounded-lg shadow-sm"
                    >
                        <div>
                            <p className="text-sm text-gray-600">{tx.date}</p>
                            <p className="text-md">{tx.description}</p>
                            <p
                                className={`text-lg font-semibold ${tx.type === "income" ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                ₹{tx.amount}
                            </p>
                        </div>
                        <button
                            onClick={() => deleteTransaction(tx.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionTimeline;
