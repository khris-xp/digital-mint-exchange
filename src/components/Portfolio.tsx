import { authService } from "@/services/auth.service"
import { coinService } from "@/services/coin.service"
import { walletService } from "@/services/wallet.service"
import { CoinType } from "@/types/coin.type"
import { CreateWalletType, SellWalletType, TransferWalletType } from "@/types/request.type"
import { UserType } from "@/types/user.type"
import { WalletType } from "@/types/wallet.type"
import { useEffect, useState } from "react"
import PortfolioTable from "./PortfolioTable"

export default function Portfolio() {
    const [currency, setCurrency] = useState<WalletType[]>([]);
    const [user, setUser] = useState<UserType | undefined>();
    const [coin, setCoin] = useState<CoinType[]>([]);
    const [createWallet, setCreateWallet] = useState({ coin_id: '', amount: 0 });
    const [sellWallet, setSellWallet] = useState({ coin_id: '', amount: 0 });
    const [tradeWallet, setTradeWallet] = useState({ coin_id: '', amount: 0, transfer_id: '' });
    const [allUser, setAllUser] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const fetchedUser = await authService.getUserProfile();
                setUser(fetchedUser);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchCoin = async () => {
            try {
                const response = await coinService.getAllCoins();
                setCoin(response);
            } catch (error) {
                console.error('Error fetching coins:', error);
            }
        };

        fetchCoin();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await authService.getAllUsers();
                setAllUser(response);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                if (user) {
                    const wallet = await walletService.getWalletByOwnerId(user.id);
                    setCurrency(wallet);
                }
            } catch (error) {
                console.error('Error fetching wallet:', error);
            }
        };

        fetchWallet();
    }, [user]);

    const openModal = (modalId: string): void => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, setter: React.Dispatch<React.SetStateAction<CreateWalletType | SellWalletType | TransferWalletType>>) => {
        const selectedCoinId = e.target.value;
        setter((prev: CreateWalletType | SellWalletType) => ({ ...prev, coin_id: selectedCoinId }));
    };

    const handleCreateWallet = async (): Promise<void> => {
        try {
            await walletService.createWallet(createWallet);
        } catch (error) {
            console.error('Error creating wallet:', error);
        }
    };

    const handleSellWallet = async (): Promise<void> => {
        try {
            await walletService.sellWallet(sellWallet);
        } catch (error) {
            console.error('Error selling wallet:', error);
        }
    };

    const handleTradeWallet = async (): Promise<void> => {
        try {
            await walletService.tradeWallet(tradeWallet);
        } catch (error) {
            console.error('Error trading wallet:', error);
        }
    }

    return (
        <section className="container px-4 mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex justify-start text-2xl">
                    Portfolio Table
                </div>
                <div className="flex justify-start space-x-4">
                    <button
                        onClick={() => openModal("add_coin")}
                        className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    >
                        Add Coin
                    </button>
                    <button
                        onClick={() => openModal("sell_coin")}
                        className="text-white py-2 px-4 uppercase rounded bg-orange-400 hover:bg-orange-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    >
                        Sell Coin
                    </button>
                    <button
                        onClick={() => openModal("trade_coin")}
                        className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-900 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                    >
                        Trade
                    </button>
                    <dialog id="add_coin" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Add Your Coin!</h3>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select your coin</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => handleSelectChange(e, setCreateWallet)}
                                    value={createWallet.coin_id}
                                >
                                    <option disabled value="">
                                        Pick one
                                    </option>
                                    {coin.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">What is your amount?</span>
                                </div>
                                <input type="number" placeholder="Your amount" className="input input-bordered w-full"
                                    onChange={(e) => setCreateWallet({ ...createWallet, amount: parseInt(e.target.value) })}
                                />
                            </label>
                            <div className="flex justify-end">
                                <button onClick={handleCreateWallet} className="mt-5 bg-blue-500 p-3 text-white rounded-2xl hover:bg-blue-600 duration-100">Submit</button>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="sell_coin" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Sell Your Coin!</h3>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select your coin</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => handleSelectChange(e, setSellWallet)}
                                    value={sellWallet.coin_id}
                                >
                                    <option disabled value="">
                                        Pick one
                                    </option>
                                    {coin.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">What is your amount?</span>
                                </div>
                                <input type="number" placeholder="Your amount" className="input input-bordered w-full"
                                    onChange={(e) => setSellWallet({ ...sellWallet, amount: parseInt(e.target.value) })}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select who do you want to transfer</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => handleSelectChange(e, setSellWallet)}
                                    value={sellWallet.coin_id}
                                >
                                    <option disabled value="">
                                        Pick one
                                    </option>
                                    {coin.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <div className="flex justify-end">
                                <button onClick={handleSellWallet} className="mt-5 bg-blue-500 p-3 text-white rounded-2xl hover:bg-blue-600 duration-100">Submit</button>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="trade_coin" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Trade Your Coin!</h3>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select your coin</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => setTradeWallet({ ...tradeWallet, coin_id: e.target.value })}
                                    value={tradeWallet.coin_id}
                                >
                                    <option disabled value="">
                                        Pick one
                                    </option>
                                    {coin.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">What is your amount?</span>
                                </div>
                                <input type="number" placeholder="Your amount" className="input input-bordered w-full"
                                    onChange={(e) => setTradeWallet({ ...tradeWallet, amount: parseInt(e.target.value) })}
                                />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select who you want to trade</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    onChange={(e) => setTradeWallet({ ...tradeWallet, transfer_id: e.target.value })}
                                    value={tradeWallet.transfer_id}
                                >
                                    <option disabled value="">
                                        Pick one
                                    </option>
                                    {allUser.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.username}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <div className="flex justify-end">
                                <button onClick={handleTradeWallet} className="mt-5 bg-blue-500 p-3 text-white rounded-2xl hover:bg-blue-600 duration-100">Submit</button>
                            </div>
                        </div>
                    </dialog>

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