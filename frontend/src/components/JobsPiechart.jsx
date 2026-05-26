import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList
} from "recharts";

const COLORS = [
    "#0088FE",
    "#556B2F",
    "#FFBB28",
    "#FF8042",
    "#7B4019",
    "#FFEEA9",
];

export default function JobsPieChart({data}) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    // The property in your data object that holds the value
                    dataKey="count"
                    // The property that holds the segment name (for tooltip/legend)
                    nameKey="date"
                    // Outer radius of the pie (as a percentage of container or fixed px)
                    outerRadius={180}
                    // Fill color if you want a single color for all segments
                    // fill="#8884d8"
                    // innerRadius={60} //make it a donut chart
                >
                    <LabelList
                        dataKey="count"
                        position="inside" // 'inside', 'outside', 'center'
                        fill="#ffffff" // White text
                        fontSize={16}
                        fontWeight="bold"
                        formatter={(count) => `${count}`} // Just show the number
                    />
                    {/* Customize the color of each segment (slice) */}
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                {/* Shows details on hover */}
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
                {/* <Legend
                    contentStyle={""}
                    verticalAlign="bottom" // 'top' | 'bottom' | 'left' | 'right'
                    align="center" // 'left' | 'center' | 'right'
                    layout="horizontal" // 'horizontal' | 'vertical'
                    iconSize={16} // size of the legend icon
                    iconType="circle"
                    wrapperStyle={{
                        padding:10,
                        background:"#fff",
                    }}
                /> */}
            </PieChart>
        </ResponsiveContainer>
    );
}
