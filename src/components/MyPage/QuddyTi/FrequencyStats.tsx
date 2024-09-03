import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

const BASE_COLOR = '#EBD9C9';
const FILL_COLOR = '#D8B18E';

const FrequencyStats = ({ daysInMonth, count }) => {
  const totalCount = count
    ? count.dailyCount +
      count.growthCount +
      count.emotionCount +
      count.travelCount
    : 0;

  const data = [
    {
      type: 'P(즉흥)',
      type2: 'J(판단)',
      value: totalCount,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={100} className="mt-10">
      <h1 className="text-2xl font-medium text-center">일기 작성 빈도수</h1>

      <BarChart layout="vertical" data={data} margin={{ left: 50, right: 25 }}>
        <XAxis type="number" domain={[0, daysInMonth]} hide />
        <YAxis
          dataKey="type"
          type="category"
          axisLine={false}
          tickLine={false}
          width={60}
          tick={{ fontSize: '15px', fill: '#000' }}
        />
        <YAxis
          dataKey="type2"
          type="category"
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '15px', fill: '#000' }}
        />
        <Bar
          dataKey="value"
          barSize={25}
          radius={[20, 20, 20, 20]}
          background={{
            fill: BASE_COLOR,
            radius: [20, 20, 20, 20],
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={FILL_COLOR} />
          ))}
          <LabelList
            dataKey="value"
            position="bottom"
            offset={10}
            fill="#000"
            className="text-black opacity-50 text-[16px]"
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FrequencyStats;
