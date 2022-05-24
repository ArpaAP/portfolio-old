import codebg from './assets/codebg.png';
import arpa from './assets/arpa.png';

import ReactFullpage from '@fullpage/react-fullpage';

const App: React.FC = () => {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={900}
        licenseKey="gplv3-license"
        scrollBar
        keyboardScrolling
        dragAndMove
        menu="#menu"
        anchors={['intro', 'tech', 'projects']}
        navigation
        navigationPosition="right"
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section relative text-center select-none">
                <img
                  src={codebg}
                  className="blur-sm dark animate-fade-in min-h-screen object-cover brightness-90"
                  style={{
                    animationDelay: '0.3s',
                    animationTimingFunction: 'ease-in-out',
                  }}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-center gap-5">
                  <div className="hover:-translate-y-1 hover:scale-125 transition-all duration-300">
                    <img
                      alt="알파"
                      src={arpa}
                      className="w-40 h-40 drop-shadow-2xl animate-avatar-sleepdown"
                    />
                  </div>
                  <h1 className="text-7xl font-semibold drop-shadow-2xl animate-fade-in">
                    안녕하세요!
                  </h1>
                  <h3 className="text-2xl drop-shadow-2xl animate-fade-in">
                    학생 개발자 알파입니다.
                  </h3>
                </div>
                <div
                  className="absolute bottom-5 left-0 right-0 flex text-center mt-auto font-semibold shadow-2xl animate-fade-in text-lg"
                  style={{ animationDelay: '1.8s' }}
                >
                  <div
                    className="mx-auto px-4 py-2 animate-bounce items-center hover:text-emerald-400 transition-all cursor-pointer duration-300"
                    onClick={() => {
                      fullpageApi.moveSectionDown();
                    }}
                  >
                    <i className="xi-angle-down mr-2" />더 살펴보기
                  </div>
                </div>
              </div>

              <div className="section bg-slate-100">
                <div className="px-16 flex flex-col justify-center gap-5">
                  ㅁㄴㅇㄹ
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
