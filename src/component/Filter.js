import React, { useEffect, useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import './filter.css';
const Filter = () => {
    
const [selectedFlavors, setSelectedFlavors] = useState([]);
  const options = [
    { cat: "Backend", key: "Backend" },
    { cat: "Frontend", key: "Frontend" },
    { cat: "Software Engineer", key: "Software Engineer" },
    { cat: "IOS", key: "IOS" },
    { cat: "Flutter", key: "Flutter" },
    { cat: "FullStack", key: "FullStack" }
  ];
  useEffect(()=> {
    console.log(selectedFlavors);
  },[selectedFlavors])
  return (
    <div className="filter">
      
      <Multiselect
        displayValue="key"
        value={selectedFlavors}
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={setSelectedFlavors}      
        options= {options}
        placeholder="Role"
        className='dropDown'
        />
    
    <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}      
        options= {options}
        placeholder="Number Of Employee"
        className='dropDown'
        />
         <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}      
        options= {options}
        placeholder="Experience"
        className='dropDown'
        />
         <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}      
        options= {options}
        placeholder="Remote"
        className='dropDown'
        />
         <Multiselect
         
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}      
        options= {options}
        placeholder="Role"
        className='dropDown'
        />
        <Multiselect
        displayValue="key"
        onKeyPressFn={function noRefCheck(){}}
        onRemove={function noRefCheck(){}}
        onSearch={function noRefCheck(){}}
        onSelect={function noRefCheck(){}}      
        options= {options}
        placeholder="Role"
        className='dropDown'
        />

    </div>
  )
}

export default Filter