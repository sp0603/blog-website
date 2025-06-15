import NavBar from "@/components/navBar";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-2 mt-30">
        <div className="">
          <h1 className="text-pink-600 text-9xl ml-50 p-2 pt-60 font-bold"> Echo </h1>
          <h2 className="text-white text-3xl ml-50 p-2"> Where you can call and someone will answer.</h2>
          <h3 className="text-white text-xl ml-50 p-2"> Here, you can share articles, stories, and connect to people who share your interests</h3>
        </div>
        <div className="">
          <img src="/signal-signal-tower-svgrepo-com.svg" alt="Signal tower" className="w-80 pt-50 ml-50" />
        </div>

      </div>
    </div>
  );
}