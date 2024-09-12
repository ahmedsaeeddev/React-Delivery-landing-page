const Order = () => {
    return (
        <>
            <section className="bg-gray-100 py-16">
                <h2 className="text-center text-2xl font-bold">How To Order?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                    {['Choose your location', 'Choose what to eat', 'Make your first order', 'Now! Your food is on the way'].map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-3xl text-orange-500 font-bold">{`0${index + 1}`}</div>
                            <p className="mt-4 text-center">{step}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Order