import NavBar from "@/components/navBar";

export default function AboutPage() {
    return (
        <div>
            <NavBar />
            <h1 className="text-5xl pt-60 ml-50 text-pink-600"> Hey! I'm Sydney</h1>
            <div className="w-150 ml-50">
                <h2 className="text-2xl pt-7 hidden dark:block"> And welcome to my website! This is a passion project, dedicated to developing my skills with topics that I love!
                    Echo is a way to get information out to the masses. People want to connect with people that share their interests, whatever that may be.
                    It could be crochet, geography, or really anything you could imagine.
                </h2>
                <h2 className="text-2xl pt-7 text-black dark:hidden"> And welcome to my website! This is a passion project, dedicated to developing my skills with topics that I love!
                    Echo is a way to get information out to the masses. People want to connect with people that share their interests, whatever that may be.
                    It could be crochet, geography, or really anything you could imagine.
                </h2>
                <h2 className="text-2xl pt-7 hidden dark:block"> The project is still developing as, of course, I am always working out kinks and wanting any feeback that
                    could provide a better user experience for the viewer.
                </h2>
                <h2 className="text-2xl pt-7 text-black dark:hidden"> The project is still developing as, of course, I am always working out kinks and wanting any feeback that
                    could provide a better user experience for the viewer.
                </h2>
            </div>
        </div>
    );
}