import { DatumType } from "@/types/currency.type"

export default function CryptoTable({ currency }: { currency: DatumType[] }) {
    return (
        <section className="container px-4 mx-auto">
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
                                                <span>Slug</span>
                                            </button>
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">Price</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">1H</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">24H</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">7D</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">24H Volume</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">MKT CAP</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currency.map((item) => (
                                        <tr key={item.id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <div className="flex items-center gap-x-2">
                                                        <div>
                                                            <h2 className="font-medium text-gray-800">{item.name}</h2>
                                                            <p className="text-sm font-normal text-gray-600">@{item.symbol}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                    <h2 className="text-sm font-normal text-gray-500">{item.slug}</h2>
                                                </div>
                                            </td>
                                            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>${item.quote.USD.price}</td>
                                            <td className={`px-4 py-4 text-sm ${item.quote.USD.percent_change_1h > 0 ? 'text-green-500' : 'text-red-500'} whitespace-nowrap`}>{item.quote.USD.percent_change_1h}</td>
                                            <td className={`px-4 py-4 text-sm ${item.quote.USD.percent_change_24h > 0 ? 'text-green-500' : 'text-red-500'} whitespace-nowrap`}>{item.quote.USD.percent_change_24h}</td>
                                            <td className={`px-4 py-4 text-sm ${item.quote.USD.percent_change_7d > 0 ? 'text-green-500' : 'text-red-500'} whitespace-nowrap`}>{item.quote.USD.percent_change_7d}</td>
                                            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>{item.quote.USD.volume_24h}</td>
                                            <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>{item.quote.USD.market_cap}</td>
                                        </tr>
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