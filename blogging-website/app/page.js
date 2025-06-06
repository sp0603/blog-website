export default function Home() {
  return (
    <div>
      <nav className="text-black font-thin p-4">
        <ul className="flex justify-center space-x-45 text-xl font-bold"><li> Home </li>
          <li> About</li>
          <li> Contact</li>
          <li> Log In</li>
          <li> Sign Up</li>
        </ul>
      </nav>
      <div>
        <div className="text-center mt-30">
          <h1 className="text-4xl font-bold p-6 text-center leading-snug max-w-3xl mx-auto">
            Welcome to <span className="text-sky-300">Log</span>, where you can post, share, and comment under your daily interests!
          </h1>
        </div>
        <div className="grid grid-cols-3 md:gap-5 mt-30 place-items-center">
          <img src="/heart-svgrepo-com.svg" className="w-80 h-80 center"></img>
          <img src="share-svgrepo-com.svg" className="w-80 h-80"></img>
          <img src="/comment-svgrepo-com.svg" className="w-80 h-80"></img>
          <h3 className="text-2xl font-bold text-center"> Like </h3>
          <h3 className="text-2xl font-bold text-center"> Share</h3>
          <h3 className="text-2xl font-bold text-center"> Comment</h3>
        </div>
      </div>
    </div>
  );
}