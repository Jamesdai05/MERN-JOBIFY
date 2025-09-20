import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const StatsBarChart = ({data}) => {
    console.log(data)
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{ top: 40}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="date"
                    fontWeight="bold"
                    label={{
                        value: "Month",
                        fill: "#374151",
                        position: "insideBottom",
                        style: { textAnchor: "middle" },
                        offset: -10,
                    }}
                />
                <YAxis
                    label={{
                        value: "Number of Applications",
                        angle: -90,
                        position: "insideLeft",
                        offset: 20,
                        fill: "#374151",
                        fontSize: 14,
                        style: { textAnchor: "middle" },
                    }}
                />

                {/* Hover tooltip and legend */}
                <Tooltip
                    contentStyle={{
                        width: "100px",
                        backgroundColor: "#87eaf2", // dark gray bg
                        color: "#fff",
                        border: "1px solid black", // gray border
                        borderRadius: "0.5rem",
                        textAlign: "center",
                    }}
                />
                <Legend align="center" verticalAlign="bottom" />

                {/* The bar itself */}
                <Bar
                    dataKey="count"
                    fill="#3182ce"
                    barSize={50}
                    label={{ fill: "white", fontSize: 16, fontWeight: "bold", position:"centerTop"}}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
export default StatsBarChart;
