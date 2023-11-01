import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full h-14 border-b fixed top-0 z-50 bg-white">
      <div className="max-w-5xl mx-auto h-full flex items-center">
        <Link href="/">
          <h1 className="font-medium">Metacargo</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
