import React from 'react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      data-component="HomeLayout"
      className="fixed bottom-0  w-screen h-[100px] bg-blue500"
    >
      {children}
    </div>
  );
};

export default HomeLayout;
