const EmotionQuestion = ({ setSelectedTemplate }) => {
  const questions = [
    'Q. 오늘 당신을 제일 힘들게 했던 일이 있나요 ? 그 일을 적어보며 하루를 풀어볼까요 ?',
    'Q. 오늘 당신에게 위로를 해준 사람은 누구인가요 ?',
    'Q. 오늘의 감정을 한 마디로 표현한다면 무엇이라고 할 수 있을까요 ?',
    'Q. 가장 강하게 느꼈던 감정은 무엇이었나요 ?',
    'Q. 오늘의 감정 변화를 경험했다면, 어떤 상황에서 그런 변화가 있었나요 ?',
    'Q. 오늘 기분이 상한 적이 있었다면, 어떻게 그 상황을 극복했나요 ?',
    'Q. 오늘 자신을 위로하거나 긍정적인 방향으로 바꾸기 위해 노력했던 것이 있을까요 ?',
  ];
  return (
    <>
      <div className="flex flex-col gap-[22px] mt-[37px] mx-auto cursor-pointer  whitespace-pre-wrap px-[23px]">
        {questions.map((question, index) => (
          <div
            key={index}
            onClick={() => setSelectedTemplate(question)}
            className="text-[17px]  hover:text-red-500 "
          >
            {question}
          </div>
        ))}
      </div>
    </>
  );
};
export default EmotionQuestion;
