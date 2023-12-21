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
            <CryptoTable />
            <ContactUs />
        </div>
    )
}