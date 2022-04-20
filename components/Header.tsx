
import Link from 'next/link'
import { VscSymbolKeyword } from 'react-icons/vsc'

function Header() {
  return (
    <header>
        <div className="flex cursor-pointer">
            <VscSymbolKeyword className="m-2 w-8 h-8 object-contain" />
            <Link href="/"> 
                <h1 className="m-2 text-2xl font-medium">Example Blog Site</h1>     
            </Link>
        </div>

        <div>

        </div>
    </header>
  )
}
export default Header