import {
    PiSuitcaseSimpleFill,
    PiBugBeetle,
    PiCheckCircleLight,
} from "react-icons/pi";
import { AiTwotoneSchedule } from "react-icons/ai";
import StatItem from "./StatsItem";
import Wrapper from "./wrapper/statsContainer.js";

const StatsContainer = ({data}) => {

    const stats = [
        {
            title: "Pending Applications",
            count: data?.pending || 0,
            icon: <PiSuitcaseSimpleFill />,
            bcg: "#F4991A",
            color: "#FFEEA9",
        },
        {
            title: "Ongoing Applications",
            count: data?.onGoing || 0,
            icon: <AiTwotoneSchedule />,
            bcg: "#81E7AF",
            color: "#537D5D",
        },

        {
            title: "Interview Scheduled",
            count: data?.interview || 0,
            icon: <PiCheckCircleLight />,
            bcg: "#578FCA",
            color: "#5e72b9",
        },

        {
            title: "Declined Applications",
            count: data?.declined || 0,
            icon: <PiBugBeetle />,
            bcg: "#FB4141",
            color: "#f38d8d",
        },
    ];


    return (
        <Wrapper className="statsContainer">
            {stats.map(stat=><StatItem key={stat.title} {...stat}/>)}
        </Wrapper>
    );
};
export default StatsContainer;
