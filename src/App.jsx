import { useState } from 'react'
import { FiGithub, FiUsers, FiUserPlus, FiBook } from 'react-icons/fi'
import SearchBar from './Components/searchBar'
import ProfileCard from './Components/profileCard'

export default function App() {
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (username) => {
    if (!username) return
    setError('')
    setProfile(null)
    setLoading(true)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) throw new Error('Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente')
      const data = await response.json()
      setProfile(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F] relative overflow-hidden">
      <div className="fixed -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-[#005CFF] opacity-30 blur-[100px]"></div>
      <div className="fixed -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-[#005CFF] opacity-30 blur-[100px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-20 px-4">
      <div className="w-full max-w-4xl space-y-8 p-8 rounded-xl bg-black/80 backdrop-blur-sm shadow-2xl">      
          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-4 mb-2">
              <FiGithub className="text-5xl text-[#005CFF]" />
              <h1 className="text-4xl font-bold text-white">
                 Perfil <span className="text-[#005CFF]">GitHub</span>
              </h1>
            </div>
          </div>
          <SearchBar onSearch={handleSearch} loading={loading} />
          {error && (
            <div className="p-4 bg-[#D9D9D9] border border-red-700 rounded-lg animate-fade-in">
              <p className="text-[#FF0000] text-center">{error}</p>
            </div>
          )}
          {loading && (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#005CFF]"></div>
            </div>
          )}
          {profile && <ProfileCard profile={profile} />}
        </div>
      </div>
    </div>
  )
}