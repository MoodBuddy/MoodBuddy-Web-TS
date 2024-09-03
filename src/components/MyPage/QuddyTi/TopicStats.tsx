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

const TopicStats = ({ topicList, daysInMonth, data }) => {
  const generateData = () => {
    return topicList.map((topic) => ({
      type: `${topic.value}(${topic.label})`,
      value: data ? data[`${topic.value.toLowerCase()}Count`] : 0,
    }));
  };

  const chartData = generateData();

  return (
    <ResponsiveContainer width="100%" height={400} className="mt-20 mb-16">
      <h1 className="text-2xl font-medium text-center">일기 주제</h1>
      <BarChart
        layout="vertical"
        data={chartData}
        margin={{ left: 50, right: 80 }}
      >
        <XAxis type="number" domain={[0, daysInMonth]} hide />
        <YAxis
          dataKey="type"
          type="category"
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
          {chartData.map((entry, index) => (
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

export default TopicStats;
