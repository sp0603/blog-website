import NavBar from "@/components/navBar";

export default function ContactPage() {
    return (
        <div>
            <NavBar />
            <h1 className="text-5xl pt-60 ml-50 text-pink-600"> Contact Me! </h1>
            <div className="w-150 ml-50">
                <h2 className="text-2xl pt-7 hidden dark:block">
                    I am always open to ideas that would help develop this website into something people
                    would really want to experience with and push it even further for the future. Who knows? I also would love it
                    if people notice anything that looks out of place or is
                </h2>
                <h2 className="text-2xl pt-7 dark:hidden">
                    I am always open to ideas that would help develop this website into something people
                    would really want to experience with and push it even further for the future. Who knows? I also would love it
                    if people notice anything that looks out of place or is
                </h2>
            </div>
        </div>
    );
}