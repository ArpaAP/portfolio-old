import codebg from './assets/codebg.png';
import arpa from './assets/arpa.png';

const App: React.FC = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto">
      <div className="snap-start relative h-screen text-center select-none">
        <img
          src={codebg}
          className="blur-sm dark animate-fade-in"
          style={{ animationDelay: '0.4s', animationTimingFunction: 'linear' }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full flex flex-col justify-center items-center gap-5 pt-40">
          <img
            alt="알파"
            src={arpa}
            className="w-40 h-40 drop-shadow-2xl animate-avatar-sleepdown"
          />
          <h1 className="text-7xl font-semibold drop-shadow-2xl animate-fade-in">
            안녕하세요!
          </h1>
          <h3 className="text-2xl drop-shadow-2xl animate-fade-in">
            학생 개발자 알파입니다.
          </h3>
          <div
            className="mt-auto mb-5 font-semibold shadow-2xl animate-fade-in"
            style={{ animationDelay: '1.8s' }}
            onClick={() => {}}
          >
            더 살펴보기
          </div>
        </div>
      </div>

      <div className="snap-start relative h-screen bg-slate-100">
        <div className="px-16 flex flex-col justify-center gap-5">ㅁㄴㅇㄹ</div>
      </div>
    </div>
  );
};

export default App;
