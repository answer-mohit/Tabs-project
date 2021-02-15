import React,{useEffect, useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {AiOutlineDoubleLeft} from 'react-icons/ai';
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading,setloading]=useState(true);
  const [jobs,setjobs]=useState([]);
  const [value,setvalue]=useState(0);


  const fetchjobs=async()=>{
    const response=await fetch(url);
    const newjobs=await response.json();
setjobs(newjobs);
console.log(newjobs);
setloading(false);
  }
  useEffect(()=>{
fetchjobs();
  },[]);
  if(loading){
    return(<h1 className="text-success m-5 text-center fw-bold display-4"> loading....</h1>)
  }

  const {company,dates,duties,title}=jobs[value];
  return (
<div className="container">
  <div className="row">
  <div className="col-10 mx-auto">
<h1 className=" mt-4 text-primary text-center">
<u>
Experience
</u>
</h1> 
<div className="">
  {/* btn conatiner */}
  {/* job info */}
  <div className="container m-3 ">
  {/* buttons for tabs */}
  <div className="text-center my-4">
  {
  jobs.map((item,index)=>{
    const {duties,title,company,dates}=item;
    return(<button type="button" 
      key={index} 
      class="btn btn-outline-success m-3" onClick={()=>setvalue(index)}>
      {title}
      </button>)

  })
}

  </div>
  <h3 className='ms-5'>{title}</h3>
  <h5 className='ms-5'>{company}</h5>
  <p className="text-danger ms-5" >{dates}</p>
<div className="text-secondary p-3">
  {duties.map((duty,i)=>{
    return<div key={i} className="container">
<div className="row">
<div className="col-2 text-center">
<AiOutlineDoubleLeft className="text-primary m-0"/>

</div>
<div className="col-10">

<p>
    {duty}
    </p>
</div>

</div>
    
    </div>
  })}
</div>
  </div>
</div>

    </div>
    
  </div>
</div>
  );
}

export default App;
