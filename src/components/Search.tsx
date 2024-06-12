import React, { useState } from 'react'
import { Input } from 'antd'

interface Props<T> {
  data: T[]
  setFilteredData: React.Dispatch<React.SetStateAction<T[]>>
}


export const Search = <T extends object>({ data, setFilteredData }: Props<T>) => {
  const [searchText, setSearchText] = useState('')

  const clearSearch = () => {
    setSearchText('')
    setFilteredData(data)
  }

  const handleSearch = (value: string) => {
    setSearchText(value)
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(value.toLowerCase())
      )
    )
    setFilteredData(filtered)
  }

  return (
    <>
      <Input.Search
        placeholder='Search...'
        value={searchText}
        onChange={e => handleSearch(e.target.value)}
        style={{ marginBottom: 16, width: '60%' }}
      />
      {searchText && (
        <div className='searchClearButton'>
          <span>
            Search results for: <strong>{searchText}</strong>
          </span>
          <button onClick={clearSearch}>Clear Search</button>
        </div>
      )}
    </>
  )
}