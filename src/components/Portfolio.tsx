import { authService } from "@/services/auth.service"
import { walletService } from "@/services/wallet.service"
import { UserType } from "@/types/user.type"
import { WalletType } from "@/types/wallet.type"
import { useEffect, useState } from "react"
import PortfolioTable from "./PortfolioTable"

export default function Portfolio() {
    const [currency, setCurrency] = useState<WalletType[]>([]);
    const [user, setUser] = useState<UserType | undefined>();

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await authService.getUserProfile();
            setUser(fetchedUser);
        };

        const fetchWallet = async () => {
            if (user) {
                const wallet = await walletService.getWalletByOwnerId(user.id);
                setCurrency(wallet);
            }
        };

        if (!user) {
            fetchUser();
        } else if (user && currency.length === 0) {
            fetchWallet();
        }
    }, [user, currency]);

    return (
        <section className="container px-4 mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-start text-2xl">
                    Portfolio Table
                </div>
                <div className="flex justify-start">
                    <button
                        className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    >
                        Add Token
                    </button>
                </div>
            </div>
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            <div className="flex items-center gap-x-3">
                                                <span>Coin</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                            <button className="flex items-center gap-x-2">
                                                <span>Rate</span>
                                            </button>
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Total Price</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Price</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currency.map((item) => (
                                        <PortfolioTable key={item.id} currency={item} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}