import React, { useState } from 'react'
import './searchBar.scss'

const types = ['buy', 'rent']

function SearchBar () {
  const [query, setQuery] = useState({
    type: 'buy',
    location: '',
    minPrice: 0,
    maxPrice: 0
  })
  const switchType = val => {
    setQuery(prev => ({ ...prev, type: val }))
  }

  return (
    <div>
      <div className='searchBar'>
        <div className='type'>
          {types.map(type => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={query.type === type ? 'active' : ''}
            >
              {type}
            </button>
          ))}
        </div>
        <form action=''>
          <input
            type='text'
            className='location'
            placeholder='City location '
          />
          <input
            type='number'
            className='minPrice'
            min={0}
            max={10000000}
            placeholder='Min Price'
          />
          <input
            type='number'
            className='maxPrice'
            min={0}
            max={10000000}
            placeholder='Max Price'
          />
          <button>
            <img src='/search.png' alt='' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
