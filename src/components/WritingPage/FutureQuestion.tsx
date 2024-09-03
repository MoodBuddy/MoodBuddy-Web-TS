const FutureQuestion = ({ setSelectedTemplate }) => {
  const questions = [
    'Q. 내일을 기대하고 있는 것은 무엇인가요 ?',
    'Q. 당신을 위한 약속(꿈, 목표, 도전)을 지켰나요 ?',
    'Q. 하루를 마무리하며, 내일의 내가 나아졌으면 하는 한가지는 무엇일까요 ?',
    'Q. 내일의 나는 어떤 일정이 있나요 ? 기대가 되나요 ?',
    'Q. 내일의 나에게 전할 한마디를 적어볼까요 ?',
    'Q. 앞으로의 목표나 계획을 세우는 데 도움을 준 오늘의 경험은 무엇인가요 ?',
    'Q. 미래에 이루고 싶은 버킷리스트가 있나요 ?',
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
export default FutureQuestion;
