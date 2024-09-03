const DailynQuestion = ({ selectedTemplate, setSelectedTemplate }) => {
  const questions = [
    'Q. 오늘의 일정은 어땠고, 그 중에서 어떤 순간이 가장 기억에 남았나요 ?',
    'Q. 오늘 가장 기억에 남는 일이 있나요 ? 그 장면을 다시 한번 기억해서 적어볼까요 ?',
    'Q. 오늘의 나를 돌아보면, 어떤 점이 좋았고 부족했을까요 ?',
    'Q. 오늘 당신에게 제일 행복했던 순간은 언제인가요 ? 그 장면을 다시 한번 기억해서 적어볼까요 ?',
    'Q. 오늘 당신에게 제일 감사했던 일은 무엇인가요 ? 그 장면을 다시 한번 기억해서 적어볼까요 ?',
    'Q. 오늘 당신에게 제일 후회스러웠던 일이 있나요 ? 그 일을 적어보며 하루를 풀어볼까요 ?',
    'Q. 오늘 당신이 제일 맛있게 먹은 음식은 무엇인가요 ?',
    'Q. 오늘의 일상에서 새로운 사람을 만나거나 새로운 경험을 한 게 있나요 ?',
    'Q. 오늘의 일상 속에서 자신을 웃게 한 일은 무엇이었나요? ',
    'Q. 오늘은 어떤 점에서 성장했다고 느껴지나요 ?',
    'Q. 오늘 누구와 함께 시간을 보냈나요? 그들과의 만남에서 느낀 감정을 이야기해주세요',
    'Q. 오늘 자신을 돌아보면 어떤 점이 눈에 띄나요? 자신에게 대해 생각한 것을 공유해주세요',
  ];
  const select = (question) => {
    setSelectedTemplate(question);
  };
  return (
    <>
      <div className="flex flex-col gap-[22px] mt-[37px] mx-auto cursor-pointer  whitespace-pre-wrap px-[23px]">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => select(question)}
            className="text-[17px]  hover:text-red-500 "
          >
            {question}
          </div>
        ))}
      </div>
    </>
  );
};
export default DailynQuestion;
