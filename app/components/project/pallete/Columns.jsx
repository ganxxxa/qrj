import React from "react";

const Columns = ({ bg, from, to }) => {
  return (
    <>
      <div className={`flex flex-col h-full w-full m-0 p-0 border-0 ${bg} `}>
        <div
          className={`bg-gradient-to-t ${from} m-0 border-0 from-25% ${to} to-25% basis-2/5`}
        />
        <div className={`${bg} m-0 basis-3/5`} />
      </div>
    </>
  );
};

export default Columns;
