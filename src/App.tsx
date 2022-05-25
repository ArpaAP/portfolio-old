import React, { useState } from 'react';
import codebg from './assets/codebg.png';
import arpa from './assets/arpa.png';
import aboutbg from './assets/starry_sky_clouds_sunset.jpeg';
import techbg from './assets/lake_forest_snow.jpeg';
import { Fade, Slide } from 'react-awesome-reveal';

import ReactFullpage from '@fullpage/react-fullpage';

const App: React.FC = () => {
  const [techCategory, setTechCategory] = useState('languages');

  return (
    <>
      <ReactFullpage
        scrollingSpeed={900}
        licenseKey="gplv3-license"
        scrollBar
        keyboardScrolling
        dragAndMove
        anchors={['intro', 'about', 'tech', 'projects']}
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
                    고등학생 개발자 알파입니다.
                  </h3>
                  <div className="flex animate-fade-in">
                    <a
                      href="https://github.com/ArpaAP"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="xi-github xi-2x drop-shadow-2xl" />
                    </a>
                  </div>
                </div>
                <div
                  className="absolute bottom-5 left-0 right-0 flex text-center mt-auto font-semibold shadow-2xl animate-fade-in text-lg"
                  style={{ animationDelay: '1.8s' }}
                >
                  <div
                    className="mx-auto px-4 py-2 animate-bounce items-center hover:text-violet-500 transition-all cursor-pointer duration-300"
                    onClick={() => {
                      fullpageApi.moveSectionDown();
                    }}
                  >
                    <i className="xi-angle-down mr-2" />더 살펴보기
                  </div>
                </div>
              </div>

              <div className="section relative bg-slate-100 overflow-hidden min-h-screen">
                <img src={aboutbg} className="min-h-screen object-cover" />
                <div className="absolute left-0 right-0 text-center">
                  <h2
                    className="text-5xl font-bold"
                    style={{
                      lineHeight: 1.25,
                      textShadow: '5px 5px 5px black;',
                    }}
                  >
                    <Fade duration={1000} cascade damping={0.4}>
                      <div>
                        소프트웨어가
                        <br />
                        미래를 바꿉니다
                      </div>
                    </Fade>
                  </h2>

                  <p className="mt-5 container mx-auto w-2/5 flex flex-col gap-1">
                    <Fade duration={1000} cascade damping={0.4} delay={700}>
                      <div>
                        저는 소프트웨어 개발자를 꿈꾸고 있는 05년생 학생입니다!
                      </div>
                    </Fade>
                    <Fade duration={1000} cascade damping={0.4} delay={1400}>
                      <div>
                        무언가를 개발하는 것을 좋아합니다! 프로그래밍을
                        공부하면서 더욱 성장하고 있습니다.
                      </div>
                    </Fade>
                  </p>
                </div>
              </div>

              <div className="section relative bg-slate-100 overflow-hidden min-h-screen shadow-xl text-slate-700">
                <img src={techbg} className="min-h-screen object-cover" />
                <Slide
                  className="absolute bottom-0 left-0 right-0 mx-auto rounded-t-xl sm:w-5/6 md:w-2/3 h-4/5"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(12px)',
                  }}
                  direction="up"
                  duration={500}
                  cascade
                  damping={0.4}
                >
                  <div className="h-full shadow-xl">
                    <div className="h-7 bg-slate-200 rounded-t-xl flex items-center gap-2 px-2 shadow-xl">
                      <div className="rounded-full w-3 h-3 bg-rose-500" />
                      <div className="rounded-full w-3 h-3 bg-orange-300" />
                      <div className="rounded-full w-3 h-3 bg-green-600" />
                    </div>
                    <div
                      className="grid grid-cols-12 shadow-xl"
                      style={{ height: 'calc(100% - 1.75rem)' }}
                    >
                      <div className="px-3 py-2 col-span-3 bg-slate-300 shadow-xl">
                        <span className="px-1 text-lg font-medium text-slate-900">
                          My Technologies
                        </span>
                        <hr
                          className="my-2 border-slate-400"
                          style={{ borderWidth: '0.1px' }}
                        />
                        <div className="flex flex-col">
                          {[
                            ['languages', '프로그래밍 언어', []],
                            ['frontend', '프론트엔드'],
                            ['backend', '백엔드'],
                            ['mobile', '모바일 앱'],
                            ['database', '데이터베이스'],
                          ].map(([tech, name]) => (
                            <div
                              key={tech as string}
                              className="rounded-lg px-3 py-1.5 font-semibold cursor-pointer transition-all duration-300"
                              style={{
                                backgroundColor:
                                  techCategory === tech
                                    ? 'rgba(0, 5, 10, 0.08)'
                                    : undefined,
                              }}
                              onClick={() => {
                                setTechCategory(tech as string);
                              }}
                            >
                              {name}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="px-5 py-4 col-span-9 text-black">
                        {techCategory === 'languages' && (
                          <h2 className="font-bold text-2xl">
                            프로그래밍 언어
                          </h2>
                        )}
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>

              <div className="section bg-slate-100"></div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default App;
