'use client'

import { ChangeEvent, useState } from 'react'

const SearchForm = () => {
  const [search, setSearch] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
        <h2 className=" text-3xl">Things that your friends want</h2>
      <label className="text-center">
        <p className="p-4">Find your friend’s wish list by email</p>
        <input
          className=" w-96 border p-1"
          type="email"
          value={search}
          onChange={handleChange}
          placeholder="Podaj email..."
        />
      </label>
    </form>
  )
}

export default SearchForm
