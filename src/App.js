import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [loader, setLoader] = useState(true);
  const [courses, setCourses] = useState("");
  const [category, setCategory] = useState("All");
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoader(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar />
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loader ? <Spinner /> : <Cards courses={courses} category={category}/>}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
