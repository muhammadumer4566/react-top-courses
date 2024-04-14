import React from "react";

const Filter = ({ filterData , catagory , setCatagory }) => {

  const filterHandler = (title) =>{
    
     setCatagory(title);

  }


  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => {
        return (
          <button onClick={ () => filterHandler(data.title)}

            className={`text-white bg-black text-lg px-2 py-1 font-medium rounded-md border-2 
            transition-all duration-300 hover:bg-opacity-50 
             ${catagory === data.title ? "bg-opacity-60 border-white" : 
             "bg-opacity-50 border-transparent"}`}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
