import { Trash2 } from "lucide-react";

function TransactionList({ transactions, onDelete }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Transaction History
            </h2>

            {transactions.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No transactions yet.</p>
            ) : (
                <ul className="space-y-3">
                    {transactions.map((tx) => (
                        <li
                            key={tx.id}
                            className="flex justify-between items-center border-b pb-2 border-gray-200 dark:border-gray-700"
                        >
                            <div>
                                <p className="font-medium text-gray-800 dark:text-gray-100">
                                    {tx.description}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {tx.date}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className={`text-lg font-bold ${tx.type === "income"
                                        ? "text-green-600"
                                        : "text-red-500"
                                        }`}
                                >
                                    {tx.type === "income" ? "+" : "-"}₹
                                    {tx.amount.toFixed(2)}
                                </span>
                                <button
                                    onClick={() => onDelete(tx.id)}
                                    className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                                    aria-label="Delete transaction"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TransactionList;
