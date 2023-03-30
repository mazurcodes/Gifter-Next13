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
      <h1 className="logo font-black text-9xl text-center">Gifter</h1>
      <label className="text-center">
        <p className="p-4">Find your friend’s wish list by email</p>
        <input
          className=" w-96 border p-1 px-5 relative"
          type="email"
          value={search}
          onChange={handleChange}
          placeholder="Friend's email"
        />
      </label>
    </form>
  )
}

export default SearchForm
