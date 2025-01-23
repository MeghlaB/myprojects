import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="bg-base-200 py-4 flex items-center justify-between">
        <div >
          <h1>Project</h1>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <li className=" bg-red-500 border text-white">Home</li>
            <li className=" bg-red-500 border text-white">About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
