
import Link from 'next/link'
import { VscSymbolKeyword } from 'react-icons/vsc'

function Header() {
  return (
    <header className="flex justify-between mx-auto max-w-7xl">
        <div className="items-center hidden m-2 space-x-5 font-medium md:inline-flex">
        <Link href="/"> 
              <div className="flex cursor-pointer w-fit">
                <VscSymbolKeyword className="object-contain w-8 h-8 m-2" />
                <h1 className="m-2 text-2xl font-medium">Example Blog Site</h1> 
              </div>      
          </Link>
          
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="px-4 py-1 text-white bg-blue-600 rounded-full">Follow</h3>
        </div>

        <div className="flex items-center p-5 space-x-5 text-blue-600">
          <h3>Sign In</h3>
          <h3 className="px-4 py-1 border border-blue-600 rounded-full">Get Started</h3>
        </div>
    </header>
  )
}
export default Header