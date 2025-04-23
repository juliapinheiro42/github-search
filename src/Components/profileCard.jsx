import { FiUsers, FiUserPlus, FiBook, FiLink, FiInfo, FiGithub } from 'react-icons/fi'

const ProfileCard = ({ profile }) => {
  if (!profile) return null

  return (
    <div className="bg-[#D9D9D9] rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,92,255,0.15)]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center">
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="w-40 h-40 rounded-full border-4 border-[#005CFF] object-cover mb-4 shadow-md"
          />
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#005CFF] hover:text-[#004acc] font-medium flex items-center gap-1 transition-colors"
          >
            <FiGithub className="text-lg" />
            Ver perfil
          </a>
        </div>
        <div className="flex-1 space-y-6">
          <div className="border-b border-gray-300 pb-4">
            <h2 className="text-3xl font-bold text-gray-900">
              {profile.name || profile.login}
            </h2>
            {profile.login && profile.name && (
              <p className="text-gray-600">@{profile.login}</p>
            )}
          </div>
          {profile.bio && (
            <div className="bg-white/80 p-4 rounded-lg border-l-4 border-[#005CFF]">
              <div className="flex items-center gap-2 text-[#005CFF] mb-2">
                <FiInfo className="text-lg" />
                <h3 className="font-semibold">Biografia</h3>
              </div>
              <p className="text-gray-800 whitespace-pre-line">{profile.bio}</p>
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/90 p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FiUsers className="text-[#005CFF]" />
                Seguidores
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {profile.followers}
              </div>
            </div>
            <div className="bg-white/90 p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FiUserPlus className="text-[#005CFF]" />
                Seguindo
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {profile.following}
              </div>
            </div>
            <div className="bg-white/90 p-3 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <FiBook className="text-[#005CFF]" />
                Repositórios
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {profile.public_repos}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            {profile.company && (
              <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full shadow-sm">
                <span className="text-gray-600">🏢</span>
                <span className="text-gray-800">{profile.company}</span>
              </div>
            )}
            {profile.location && (
              <div className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full shadow-sm">
                <span className="text-gray-600">📍</span>
                <span className="text-gray-800">{profile.location}</span>
              </div>
            )}
            {profile.blog && (
              <a
                href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/90 px-3 py-2 rounded-full shadow-sm text-[#005CFF] hover:text-[#004acc] transition-colors"
              >
                <FiLink className="text-[#005CFF]" />
                <span>Website</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard