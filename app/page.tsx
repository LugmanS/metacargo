import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-6xl font-bold leading-[64px] text-center">
        Elevate with Metacargo <br />
        Ship Smarter, Faster
      </h1>
      <p className="text-lg text-center">
        Tailored tools and insights transforming your shipping <br /> journey.
        Unlock efficiency, Maximize success.
      </p>
      <Link href="/tracking">
        <div className="border p-4 rounded-md w-full max-w-2xl flex items-center gap-4 hover:bg-neutral-50 duration-200 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="Location"
            className="w-12 h-12"
          >
            <path
              d="M12,10.8a2,2,0,1,0-2-2A2,2,0,0,0,12,10.8Zm-.71,6.91a1,1,0,0,0,1.42,0l4.09-4.1a6.79,6.79,0,1,0-9.6,0ZM7.23,8.34A4.81,4.81,0,0,1,9.36,4.79a4.81,4.81,0,0,1,5.28,0,4.82,4.82,0,0,1,.75,7.41L12,15.59,8.61,12.2A4.77,4.77,0,0,1,7.23,8.34ZM19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"
              fill="#000"
              className="color000000 svgShape"
            ></path>
          </svg>
          <div>
            <h1 className="font-medium text-xl">Shipment Tracker</h1>
            <p>Unified tracking solution for your shipments</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
