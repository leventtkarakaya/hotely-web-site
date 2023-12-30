"use client";
{
  /* CountUp kullanarak sayıları hızlı artış animasyon özelligi eklemiş oluyoruz */
}
import CountUp from "react-countup";

const statsData = [
  {
    value: 1.2,
    type: "Hotels",
    unit: "k",
  },
  {
    value: 4.8,
    type: "Rooms",
    unit: "k",
  },
  {
    value: 186,
    type: "Countries",
    unit: null,
  },
];

const Stats = () => {
  return (
    <div className="flex flex-col md:flex  xl:flex-row gap-x-8 gap-y-4 my-10">
      {statsData.map((states, index) => {
        return (
          <div key={index} className="flex">
            <div className="flex items-baseline gap-x-2">
              <h3 className="h-3 text-soft_green ">
                {/* checks if stats value is a deciaml number */}
                <CountUp
                  start={0}
                  end={states.value}
                  decimals={states.value % 1 !== 0 ? 1 : 0}
                />
                <span>{states.unit}</span>
              </h3>
              <div className="text-black font-semibold">{states.type}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stats;
