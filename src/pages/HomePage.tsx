import ContactUs from "@/components/ContactUs"
import CryptoTable from "@/components/CryptoTable"
import Feature from "@/components/Feature"
import Hero from "@/components/Hero"
import PhoneAuthentication from "@/components/PhoneAuthentication"

export default function HomePage() {
    return (
        <div className="container px-6 py-16 mx-auto">
            <Hero />
            <Feature />
            <PhoneAuthentication />
            <div className="flex items-center gap-x-3 mb-10 pt-20">
                <h2 className="text-3xl font-medium text-blue-600">KTD MPC PROTECTED CUSTODIAL ARCHITECTURE
                    FOR MORE THAN 200 DIGITAL ASSETS</h2>
            </div>
            <CryptoTable />
            <ContactUs />
        </div>
    )
}