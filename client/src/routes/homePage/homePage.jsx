import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

function homePage () {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Find Your Next Home, Fast and Easy</h1>
          <p className=''>
            Find the perfect rental or apartment with ease. Browse thousands of
            listings tailored to your needs and budget. Your next home is just a
            few clicks away — start your journey today!
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>7+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>6</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>3000</h1>
              <h2>Ready Property for Premium</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='./bg.png' alt='' />
      </div>
    </div>
  )
}

export default homePage
