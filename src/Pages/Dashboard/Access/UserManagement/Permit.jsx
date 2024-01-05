import axios from "axios";
import  {  useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const Permit = () => {
  
  const location = useLocation();
  const userEmail = location.state?.from;
 
  const [allRoles, setAllRoles] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/permit")
    .then(roles=>{

      setAllRoles(roles.data[0].permit)
    })
    .catch(err=>console.log(err))
  },[])

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRoleSubmit = ()=>{
    axios.patch(`http://localhost:5000/users/${userEmail}`,{
      Permission:selectedOptions
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.error(err))
    
  }
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      // If option is already selected, remove it
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      // If option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative inline-block w-full ">
      <label>Email: {userEmail}</label>
      
      <div
        className="w-full p-4 cursor-pointer border border-gray-300 rounded relative"
        onClick={toggleDropdown}
        
      >
        {selectedOptions.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <span
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-2 py-1 cursor-pointer bg-blue-200 rounded inline-block"
              >
                {option}
              </span>
            ))}
          </div>
        ) : (
          <span>Click to select options</span>
        )}
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full  bg-white border border-gray-300 z-10 p-2 flex flex-wrap gap-2">
          {allRoles.map((option) => (
            <span
              key={option}
              onClick={() => handleOptionClick(option)}
              className="px-2 py-1 cursor-pointer transition bg-gray-100 hover:bg-gray-200 rounded inline-block"
            >
              {option}
            </span>
          ))}
          <button onClick={handleRoleSubmit} className="btn btn-ghost">submit</button>
        </div>
      )}
      
    </div>
  );
};

export default Permit;
