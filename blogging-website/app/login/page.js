import NavBar from "@/components/navBar";

export default function login() {
    return (
        <div>
            < NavBar />
            <div className="flex justify-center mt-50">
                <form className="flex flex-col space-y-4 p-4 w-100">
                    <h1 className="text-xl font-semibold text-center text-black"> Log In</h1>
                    <label className="text-sm font-semibold text-center text-black">Email</label>
                    <input type="email" placeholder="Email" className="p-2 border rounded" />

                    <label className="text-sm font-semibold text-center text-black">Password</label>
                    <input type="password" placeholder="Password" className="p-2 border rounded" />

                    <button type="submit" className="bg-black text-white p-2 rounded hover:bg-pink-600">
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
}