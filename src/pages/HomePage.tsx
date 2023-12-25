import ContactUs from "@/components/ContactUs"
import CryptoTable from "@/components/CryptoTable"
import Feature from "@/components/Feature"
import Hero from "@/components/Hero"
import PhoneAuthentication from "@/components/PhoneAuthentication"
import { CurrencyType, DatumType } from "@/types/currency.type"
import axios, { AxiosResponse } from "axios"
import { useCallback, useEffect, useState } from "react"


export default function HomePage() {
    const [currency, setCurrency] = useState<DatumType[]>([])
    const [page, setPage] = useState<number>(1)

    const fetchCurrency = useCallback(async () => {
        try {
            const response: AxiosResponse<CurrencyType> = await axios.get(`http://localhost:8081/currency?start=${page}&limit=10`)
            const data = response.data.data
            setCurrency(data)
        }
        catch (error) {
            console.log(error);
        }
    }, [page])

    const handleNextPage = () => {
        setPage(page + 1)
    }

    const handlePreviousPage = () => {
        setPage(page - 1)
    }

    const handlePage = (page: number) => {
        setPage(page)
    }

    useEffect(() => {
        fetchCurrency()
    }, [fetchCurrency, page])
    return (
        <div className="container px-6 py-16 mx-auto">
            <Hero />
            <Feature />
            <PhoneAuthentication />
            <div className="flex items-center gap-x-3 mb-10 pt-20">
                <h2 className="text-3xl font-medium text-blue-600">KTD MPC PROTECTED CUSTODIAL ARCHITECTURE
                    FOR MORE THAN 200 DIGITAL ASSETS</h2>
            </div>
            <CryptoTable currency={currency} />
            <div className="flex items-center justify-between mt-6">
                <button onClick={handlePreviousPage} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>
                        previous
                    </span>
                </button>

                <div className="items-center hidden lg:flex gap-x-3">
                    {currency.map((item, index) => (
                        <button onClick={() => handlePage(index + 1)} key={item.id} className="px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md hover:bg-gray-100">
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button onClick={handleNextPage} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
            <ContactUs />
        </div>
    )
}