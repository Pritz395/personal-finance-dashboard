function SummaryCard({ transactions }) {
    const income = transactions
        .filter((t) => t.type === "income")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "expense")
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expense;

    const boxClass = "flex-1 text-white p-4 rounded-xl shadow-md";

    return (
        <div className="flex gap-4 text-center">
            <div className={`${boxClass} bg-green-500`}>
                <h2 className="text-lg font-medium">Income</h2>
                <p className="text-2xl font-bold">₹{income.toFixed(2)}</p>
            </div>
            <div className={`${boxClass} bg-red-500`}>
                <h2 className="text-lg font-medium">Expense</h2>
                <p className="text-2xl font-bold">₹{expense.toFixed(2)}</p>
            </div>
            <div className={`${boxClass} bg-gray-700`}>
                <h2 className="text-lg font-medium">Balance</h2>
                <p className="text-2xl font-bold">₹{balance.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default SummaryCard;

