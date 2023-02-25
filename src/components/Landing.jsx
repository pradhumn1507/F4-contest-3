import React, {useState} from 'react';
import '../styles/Landing.css';
import Cards from './Cards';
import Search from './Search';

function Landing() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState()
  const [flag, setFlag] = useState(false)
  
  return (
    <div>
      <Search search={search} setSearch={setSearch} setData={setData} setFlag={setFlag} />
      <div id='showResultsFor'></div>
      <div id='appContainer'>
        {
          flag ?
          data?.length > 0 ? 
          data.map((e,index)=>{
            return (<Cards key={index} imdbID={e.imdbID} imgURL={e.Poster} title={e.Title} type={e.Type} year={e.Year} />)
          }) : 'No Results Found' : null
        }
      </div>
    </div>
  );
}

export default Landing;