import { redQuote } from '../../Utils/Constants/img';
const Testimonials = () => {
    return (
        <>
            <section className="text-center py-16">
                <h2 className="text-2xl font-bold">Our Clients Feedback</h2>
                <p className="text-gray-600 mt-2">The food at your doorstep. Why starve when you have us.</p>
                <div className="mt-8 max-w-lg mx-auto">
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                        <img src={redQuote.src} className='m-auto py-5' alt="" />
                        <p className="text-gray-600 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        <p className="mt-4 font-bold">Mitchell Marsh, CEO, Dessert Agency</p>
                    </div>
                    <div className="flex justify-center space-x-2 mt-4">
                        <button className="w-8 text-white font-bold h-8 bg-orange-500 rounded-full">&lt;</button>
                        <button className="w-8 text-white font-bold h-8 bg-gray-400 rounded-full">&gt;</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials