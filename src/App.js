import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {

      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      
    } 
    catch (error) {

      toast.error("Netwrok issues");

    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <Filter filterData={filterData} 
        catagory = {catagory}
         setCatagory = {setCatagory} />
      </div>

      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {Loading ? <Spinner /> : <Cards courses={courses} catagory = {catagory} />}
      </div>
    </div>
  );
};

export default App;
