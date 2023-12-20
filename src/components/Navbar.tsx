import { useState } from "react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpenNavbar = (): void => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="relative bg-white">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="/">
                        <img className="w-auto h-6 sm:h-7" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/3888px-Cryptocurrency_Logo.svg.png" alt="" />
                    </a>
                    <div className="flex md:hidden">
                        <button onClick={handleOpenNavbar} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${isOpen && 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${!isOpen && 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Our Service</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Security</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Token List</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Contact Us</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="/login">Login</a>
                        <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="/register">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}