export default function PhoneAuthentication() {
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl sm:leading-none max-w-lg mb-6">
                            Biometric Face
                            Verification in Real Time
                            <br className="hidden md:block" />
                            <div className="text-lg font-light mt-6">
                                Our authentication processes
                            </div>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg">Users will undergo real-time facial recognition to confirm their identity, matching the information they provided during platform registration and onboarding.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-2/5">
                        <img className="object-cover" src="https://kitwind.io/assets/kometa/one-girl-phone.png" alt="" />
                    </div>
                    <div className="w-5/12 -ml-16 lg:-ml-32">
                        <img className="object-cover" src="https://kitwind.io/assets/kometa/two-girls-phone.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}