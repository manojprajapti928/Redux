import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './Store/ProductAction';
import "./App.css";

export default function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const data = useSelector(state => state.Productstore.product);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

 
  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="product-container">
      {/* Render the current 6 items */}
      {
        currentItems.map((e, i) => (
          <div key={i} className="product-card">
            <img 
              className="product-image" 
              src="https://media.istockphoto.com/id/1359138976/photo/an-unknown-ship-in-the-distance-sails-along-the-nile-river-at-sunset.jpg?s=612x612&w=0&k=20&c=fUdt0GOt4dsYNCtdOfbJW5M6EljGHuDkiVMgm8KqIGg=" 
              alt={`Product ${e.id}`} 
            />
            <div className="product-content">
              <p className="product-id">ID: {e.id}</p>
              <h2 className="product-title">{e.title}</h2>
              <p className="product-body">{e.body}</p>
            </div>
          </div>
        ))
     
      }

      {/* Pagination controls */}
      <div className="pagination">
        <button className="back-btn" onClick={handleBack} disabled={currentPage === 1}>
          Back
        </button>
        <button className="next-btn" onClick={handleNext} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
          Next
        </button>
      </div>
    </div>
  );
}
