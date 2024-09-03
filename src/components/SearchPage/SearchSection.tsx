import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quddies } from '../../constants/QuddyList';
import { topics } from '../../constants/TopicList';
import searchIcon from '../../../public/icon/searchIcon.svg';
import Button from '../common/button/Button';
import useSearchStore from '../../store/searchStore';

const SearchSection = () => {
  const [showDetailOptions, setShowDetailOptions] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuddy, setSelectedQuddy] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [isSearchEnabled, setIsSearchEnabled] = useState(false);
  const navigate = useNavigate();

  const { setSearchParams } = useSearchStore();

  const toggleDetailOptions = () => {
    setShowDetailOptions(!showDetailOptions);

    setSearchQuery('');
    setYear('');
    setMonth('');
    setSelectedTopic(null);
    setSelectedQuddy(null);
  };

  const handleTopicClick = (index) => {
    setSelectedTopic(selectedTopic === index ? null : index);
  };

  const handleQuddyClick = (index) => {
    setSelectedQuddy(selectedQuddy === index ? null : index);
  };

  const handleSearch = () => {
    const parsedYear = year ? parseInt(year, 10) : null;
    const parsedMonth = month ? parseInt(month, 10) : null;

    const searchParams = {
      keyword: searchQuery,
      year: parsedYear,
      month: parsedMonth,
      topic: selectedTopic !== null ? topics[selectedTopic].value : null,
      diaryEmotion:
        selectedQuddy !== null ? quddies[selectedQuddy].emotion : null,
    };
    setSearchParams(searchParams);
    setShowDetailOptions(false);
    navigate('/search/searchList');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setShowDetailOptions(false);
    }
  };

  useEffect(() => {
    const parsedYear = year ? parseInt(year, 10) : null;
    const parsedMonth = month ? parseInt(month, 10) : null;
    if (
      parsedYear ||
      parsedMonth ||
      selectedTopic !== null ||
      selectedQuddy !== null ||
      searchQuery.trim() !== ''
    ) {
      setIsSearchEnabled(true);
    } else {
      setIsSearchEnabled(false);
    }
  }, [year, month, selectedTopic, selectedQuddy, searchQuery]);

  return (
    <div className="w-full relative z-[5]">
      <div className="flex flex-col items-center gap-4 mt-16">
        <div className="flex justify-center items-center gap-2 relative z-50">
          <div className="relative mr-4 ml-5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-[890px] h-[56px] text-xl placeholder-stone-300 bg-white rounded-[18px] border-2 border-black px-10"
              placeholder="검색어를 입력하세요."
            />
            <img
              src={searchIcon}
              alt="Search Icon"
              onClick={handleSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
          </div>
          <Button
            className="w-[157px] h-[57px] bg-[#C79A76] rounded-2xl text-2xl"
            onClick={toggleDetailOptions}
          >
            <p className="font-medium">상세검색</p>
          </Button>
        </div>
      </div>

      {showDetailOptions && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-0"
            onClick={toggleDetailOptions}
          />
          <div className="flex flex-col items-center absolute top-0 w-full bg-[#E8DBCF] z-30 transition duration-500 ease-in-out">
            <div className="flex flex-col gap-4 mt-40">
              <div className="flex items-center mr-40">
                <span className="text-zinc-700 text-2xl mr-24">날짜 검색</span>
                <input
                  className="w-[352px] h-[62px] text-2xl placeholder-stone-300 bg-white/opacity-90 rounded-l-2xl border-l border-y border-[#999898]  px-10"
                  placeholder="년"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
                <input
                  className="w-[352px] h-[62px] text-2xl placeholder-stone-300 bg-white/opacity-90 rounded-r-2xl border-r border-y border-[#999898] px-10"
                  placeholder="월"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </div>

              {/* 주제 검색 */}
              <div className="flex gap-4 items-center my-3">
                <span className="text-zinc-700 text-2xl mr-20">주제 검색</span>
                <div className="flex gap-4">
                  {topics.map((topic, index) => (
                    <Button
                      key={index}
                      onClick={() => handleTopicClick(index)}
                      color="white"
                      className={`rounded-[14.45px] border border-[#999898] ${
                        selectedTopic === index ? 'bg-[#ddc5b0]' : ''
                      }`}
                    >
                      <p className="px-12 py-1 text-xl font-medium">
                        {topic.label}
                      </p>
                    </Button>
                  ))}
                </div>
              </div>

              {/* 쿼디 검색 */}
              <div className="flex gap-4">
                <span className="text-zinc-700 text-2xl mr-20">쿼디 검색</span>
                <div className="flex gap-4">
                  {quddies.map((quddy, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuddyClick(index)}
                      className={`flex flex-col gap-2 py-2 px-0.5 h-[150px] w-[90px] items-center ${
                        selectedQuddy === index
                          ? 'bg-[#DCC6B1] rounded-[15px] border border-[#787878]'
                          : ''
                      }`}
                    >
                      <img
                        src={quddy.imgSrc}
                        alt={quddy.text}
                        className="w-[83px] h-[100px]"
                      />
                      <span className="text-stone-700 text-xl">
                        {quddy.text}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {isSearchEnabled ? (
                <div className="flex mb-6 justify-end">
                  <Button
                    onClick={handleSearch}
                    className="w-[157px] mr-[-22px] h-[57px] bg-[#C79A76] rounded-2xl text-2xl"
                  >
                    <p className="font-medium">검색</p>
                  </Button>
                </div>
              ) : (
                <div className="h-[81px]"></div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchSection;
