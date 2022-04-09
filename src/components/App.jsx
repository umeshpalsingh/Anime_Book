import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';

function App(props) {

  const [repos, setRepos] = useState("waiting...");
  const API_LINK = "https://ghibliapi.herokuapp.com/films";


  const fetchData = async () => {
    const {
      data
    } = await Axios.get(API_LINK);
    setRepos(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App" >
      <Header />
      <MainSection detail={repos} />
      <Footer />
    </div>
  );
}

export default App;