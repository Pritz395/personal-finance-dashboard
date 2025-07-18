import TransactionItem from './TransactionItem';

function TransactionHistory({ transactions, onDelete }) {
    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                📄 Transaction History
            </h2>
            <div className="space-y-3">
                {transactions.length === 0 ? (
                    <p className="text-gray-600 dark:text-gray-300 text-sm">No transactions yet.</p>
                ) : (
                    transactions.map((tx) => (
                        <TransactionItem
                            key={tx.id}
                            transaction={tx}
                            onDelete={() => onDelete(tx.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default TransactionHistory;
