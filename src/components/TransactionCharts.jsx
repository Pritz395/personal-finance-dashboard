import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#4ade80", "#f87171"];

export default function TransactionCharts({ transactions }) {
    const income = transactions
        .filter((tx) => tx.type === "income")
        .reduce((sum, tx) => sum + tx.amount, 0);

    const expense = transactions
        .filter((tx) => tx.type === "expense")
        .reduce((sum, tx) => sum + tx.amount, 0);

    const pieData = [
        { name: "Income", value: income },
        { name: "Expense", value: expense },
    ];

    const barData = transactions.map((tx) => ({
        name: tx.label,
        amount: tx.amount,
        type: tx.type,
    }));

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow space-y-8 text-gray-900 dark:text-white">
            <h2 className="text-xl font-semibold text-center">Visual Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pie Chart */}
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={barData}>
                        <XAxis dataKey="name" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1f2937", // dark:bg-gray-800
                                border: "none",
                                color: "#fff",
                            }}
                            labelStyle={{ color: "#fff" }}
                            itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="amount" fill="#60a5fa" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
