import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      onSearch(username.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite um usuário do GitHub..."
          aria-label="Buscar usuário do GitHub"
          className="w-full px-6 py-4 bg-white/90 text-gray-900 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-[#005CFF] placeholder-gray-500 text-base sm:text-lg pr-16"
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#005CFF] hover:bg-[#004acc] text-white p-2 sm:p-3 rounded-lg transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
          aria-label="Buscar"
        >
          <FiSearch className="text-xl" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
