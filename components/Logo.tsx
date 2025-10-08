import React from 'react'

const Logo = () => {
  return (
   <div className="w-20 h-20 glass rounded-3xl shadow-lg flex items-center justify-center mb-12">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10"
        stroke="#4ECDC4"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="12" r="2" fill="#4ECDC4" />
      <circle cx="8" cy="28" r="2" fill="#4ECDC4" />
    </svg>
  </div>
  )
}

export default Logo

