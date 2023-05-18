import React, { useEffect, useState } from 'react';
import './main.css';
import { toast } from 'react-toastify';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import { filterData} from './data';
import { apiUrl } from './data';
import Cards from './components/Cards';
import Spinner from './components/spinner';
function App() {
  const [courses,setCourses]=useState(null);  
  const [loading,setloading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  const fetchData = async() => {
    setloading(true);
    try {
      const res = await fetch(apiUrl);
      console.log(res);
      const output = await res.json();
      console.log(output);   
      setCourses(output.data);
    }catch(error){
      toast.error("Something went wrong.");
    }
    setloading(false);
  }
  useEffect( () => {
    fetchData();
  },[]);
  return(
    <div className = "flex flex-col min-h-screen bg-blue-900 ">
      <div>
        <NavBar /> 
      </div>
      <div className='bg-blue-900'>
        <div>
          <Filter 
            filterData={filterData} 
            category={category} 
            setCategory={setCategory}
          />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {/* {courses !== null ? <Cards courses={courses}/> : null} */}
          {/* <Cards courses={courses}/>  */} {/* diaplay error of object null passing*/}
          {loading ?<Spinner/>:<Cards courses={courses} category={category} setCategory={setCategory}/>}
        </div>
      </div>
    </div>

  );
}

export default App;
