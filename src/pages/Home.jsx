import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Movies from '../components/Movies';
import SCLogo from '../components/SCLogo';


function Home() {
  return (
    <div className="bg-purple-950 min-h-screen">
      <Header />
      <SCLogo />
      <Search />
      <Movies />
    </div>
  );
}

export default Home;