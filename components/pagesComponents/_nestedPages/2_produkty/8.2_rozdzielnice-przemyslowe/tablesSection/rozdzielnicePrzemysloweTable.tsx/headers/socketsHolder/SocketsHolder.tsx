import React from 'react';
/*TS*/
interface ISocketsHolder {
  index: number;
  mainContainerStyle: string;
  clockPositionStyle: string;
  socketStyle: string;
}

const SocketsHolder = ({
  index,
  mainContainerStyle,
  clockPositionStyle,
  socketStyle,
}: ISocketsHolder) => {
  /*
  ...
  */
  const createEntries = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            {' '}
            <div className="absolute bottom-[56%] left-[18%] w-[16%] h-[16%] bg-dark rounded-full" />
            <div className="absolute bottom-[56%] right-[18%] w-[16%] h-[16%] bg-dark rounded-full" />
          </>
        );
      case 1:
        return (
          <>
            <div className="absolute top-[10%] w-[16%] h-[16%] bg-dark rounded-full" />
            <div className="absolute bottom-[50%] left-[18%] w-[16%] h-[16%] bg-dark rounded-full" />
            <div className="absolute bottom-[50%] right-[18%] w-[16%] h-[16%] bg-dark rounded-full" />
          </>
        );
      case 2:
        return (
          <>
            {' '}
            <div className="absolute top-[20%] left-[25%] w-[16%] h-[16%] bg-dark rounded-[100%]" />
            <div className="absolute top-[20%] right-[25%] w-[16%] h-[16%] bg-dark rounded-[100%]" />
            <div className="absolute bottom-[35%] left-[15%] w-[16%] h-[16%] bg-dark rounded-[100%]" />
            <div className="absolute bottom-[35%] right-[15%] w-[16%] h-[16%] bg-dark rounded-[100%]" />
          </>
        );
    }
  };

  /*
  JSX
  */
  return (
    <div className="fc relative w-full h-full bg-grey">
      <div className={`${mainContainerStyle}`} style={{ aspectRatio: '1 / 1' }}>
        <div
          className={`absolute w-[80%] h-[80%] bg-blue-500 rounded-full ${socketStyle}`}
        />
        <div className={`${clockPositionStyle}`} />
        <div className="relative fc w-[64%] h-[64%] bg-light rounded-full">
          <div className="absolute bottom-[10%] w-[16%] h-[16%] bg-yellow-500 rounded-full" />
          {createEntries(index)}
        </div>
      </div>
    </div>
  );
};

export default SocketsHolder;

/*
clockPositionStyle="absolute bottom-0 w-[14%] h-[40%] bg-blue-500 rounded-lg"
*/
