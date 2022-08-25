// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
import Data from "./MOCK_DATA.json";

function App() {
  const [showData, setShowData] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    handleClick();
  }, []);

  const handleClick = () => {
    let newDater = Data.filter((data) => data["Car_model-year"] >= 2005);
    setShowData(newDater);
  };

  const handleSearchValue = (e) => {
    let searchedValue = e.target.value;
    setSearch(searchedValue);
  };

  const handleSearch = (_) => {
    let values = showData.filter(
      (item) =>
        item.first_name === search ||
        item.last_name === search ||
        item.first_name.toLowerCase() === search
        );
        setShowData(values)
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <input
          type="input"
          className="form-control"
          placeholder="search..."
          name="search"
          value={search}
          onChange={(e) => handleSearchValue(e)}
        />
        <button type="button" className="btn btn-info" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div /*className="objectname"*/>
        <div style={{ padding: "3rem" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Car Model</th>
                <th scope="col">Car Model Year</th>
                <th scope="col">Company Name</th>
              </tr>
            </thead>
            <tbody>
              {showData &&
                showData.map((item, id) => {
                  return (
                    <tr key={id}>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.gender}</td>
                      <td>{item.Car_model}</td>
                      <td>{item["Car_model-year"]}</td>
                      <td>{item.Company_name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
