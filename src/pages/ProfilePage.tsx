import MartketTable from "@/components/MartketTable";
import Portfolio from "@/components/Portfolio";
import { authService } from "@/services/auth.service";
import { UserType } from "@/types/user.type";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await authService.getUserProfile();
                if (response) {
                    setUser(response);
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.log(err)
            }
        };
        fetchUser();
    }, []);
    return (
        <div className="p-16">
            <div className="p-8 bg-white shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                        <div>
                            <p className="font-bold text-gray-700 text-xl">22</p>
                            <p className="text-gray-400">Friends</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">10</p>
                            <p className="text-gray-400">Photos</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-700 text-xl">89</p>
                            <p className="text-gray-400">Comments</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            Connect
                        </button>
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                        >
                            Message
                        </button>
                    </div>
                </div>
                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-gray-700">{user?.username} <span className="font-light text-gray-500">{user?.token}</span></h1>
                    <p className="font-light text-gray-600 mt-3">{user?.email}</p>
                </div>
                <div className="pt-20 border-b pb-12">
                    <Portfolio />
                </div>
                <div className="pt-10">
                    <MartketTable />
                </div>
            </div>
        </div>
    )
}