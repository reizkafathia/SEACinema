import React from 'react'

function Search() {
  return (
    <div>
      <section id="search">
        <div className="container">
          <div className="flex justify-center mt-[-50px] flex-col px-[70] md:px-[150px]">
            <div className="bg-white shadow-lg p-4 rounded-lg mt-20 mx-[25%]">
              <input
                type="text"
                name="Search"
                placeholder="Search"
                className="outline-none mx-[-6px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search