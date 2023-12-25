import { coinService } from "@/services/coin.service";
import { CoinType } from "@/types/coin.type";
import { WalletType } from "@/types/wallet.type";
import { useEffect, useState } from "react";

export default function PortfolioTable({ currency }: { currency: WalletType }) {
    const [coin, setCoin] = useState<CoinType | undefined>();

    useEffect(() => {
        const fetchCoin = async () => {
            if (currency && currency.coin_id) {
                const fetchedCoin = await coinService.getCoinById(currency.coin_id);
                setCoin(fetchedCoin);
            }
        };

        fetchCoin();
    }, [currency, currency.coin_id]);
    return (
        <tr key={currency.id}>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">
                    <div className="flex items-center gap-x-2">
                        <div>
                            <h2 className="font-medium text-gray-800">{coin?.name}</h2>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    <h2 className="text-sm font-normal text-gray-500">{coin?.rate}</h2>
                </div>
            </td>
            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>${currency.total}</td>
            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>${currency.price}</td>
            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>${currency.amount}</td>
        </tr>
    )
}