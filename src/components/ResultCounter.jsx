import React, { useState } from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { COUNTER_LIST } from '../utils/helper';

const ResultCounter = () => {
  const [count, setCount] = useState(false);
  const handleVisibility = (isVisible) => {
    setCount(isVisible);
  };

  return (
    <div className="text-white pt-14">
      <ReactVisibilitySensor onChange={handleVisibility}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4">
          {COUNTER_LIST.map((obj, i) => (
            <div
              key={i}
              className={`flex-1 text-center px-4 ${
                i === 0 || i === 1
                  ? 'relative after:absolute after:content-"" after:h-full after:w-0.5 after:bg-gradient-to-b after:from-white-custom-70 after:to-white-gray after:top-0 after:right-0 after:max-md:rotate-90 after:max-md:bottom-0 after:max-md:right-1/2 after:max-md:top-3/4'
                  : ''
              }`}
            >
              <p className="text-5xl font-semibold leading-custom-3xl">
                {i === 0 ? (<CountUp start={0} end={count ? obj.value : 0} duration={10} delay={1} suffix={obj.suffix} decimals={0} />):
                 i === 1 ? (
                  <span>
                    $<CountUp start={0} end={count ? obj.value : 0} duration={10} delay={1} suffix={obj.suffix} decimals={0} />
                  </span>
                ) : (
                  <CountUp start={0} end={count ? obj.value : 0} duration={10} delay={1} suffix={obj.suffix} decimals={1} />
                )}
              </p>
              <p
                className={`mt-2 opacity-80 text-base mx-auto text-center ${
                  i === 2 ? 'max-w-[187px]' : 'max-w-[146px]'
                }`}
              >
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </ReactVisibilitySensor>
    </div>
  );
};

export default ResultCounter;