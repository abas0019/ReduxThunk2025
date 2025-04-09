import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; // Import the RootState type
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";
import React from "react";

function SearchMovie() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => {
    return state.searchMovie.searchTerm;
  });
  const navigate = useNavigate();
 
  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  }

  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault(); 
                 navigate("/searchedMovie");
  }

  return (
   <form onSubmit={handleSubmit}>
     <label >Search</label>
     <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}

export default SearchMovie;
