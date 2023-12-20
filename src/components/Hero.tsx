export default function Hero() {
    return (
        <div className="lg:flex py-20 lg:py-24">
            <div className="lg:w-1/2 relative">
                <img
                    src="https://kitwind.io/assets/kometa/laptop.png"
                    className="object-cover w-full h-auto lg:w-auto lg:h-full"
                    alt=""
                />
            </div>
            <div className="lg:w-1/2 flex items-center justify-center">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
                        Crypto Custodian <br /> For{" "}
                        <span className="text-blue-500">institutions</span>
                    </h1>
                    <p className="mt-3 text-gray-600">
                        Comprehensive infrastructure for your digital assets that offer
                        custody, trade, staking, treasury operations and governance in the
                        same solution
                    </p>
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Schedule for a demo
                    </button>
                </div>
            </div>
        </div>
    )
}