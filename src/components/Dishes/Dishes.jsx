import { illustrations } from "../../Utils/Constants/img";
import { comma } from '../../Utils/Constants/img';
const Dishes = () => {
    return (
        <>
            <div className="text m-9 text-center">
                <h1 className="text-4xl font-bold">
                    MORE THAN <span className="text-primaryColor">10,000</span> DISHES TO
                    ORDER!
                </h1>
                <p className="text-[#191720]">
                    Welcome to The Biggest Network of Food Ordering & Delivery
                </p>
                <div className="dishes py-8 flex flex-col justify-end w-9/12 m-auto">
                    <div className="cards gap-6 flex">
                        <div className="card flex flex-col">
                            <div className="rounded-2xl img bg-slate-100 p-8">
                                <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                    🍕
                                </p>
                                <p className="text-1xl">Pizza</p>
                            </div>
                        </div>
                        <div className="card flex flex-col">
                            <div className="rounded-2xl img bg-slate-100 p-8">
                                <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                    🍔
                                </p>
                                <p className="text-1xl">Pizza</p>
                            </div>
                        </div>
                        <div className="card flex flex-col">
                            <div className="rounded-2xl img bg-slate-100 p-8">
                                <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                    🍣
                                </p>
                                <p className="text-1xl">Pizza</p>
                            </div>
                        </div>
                        <div className="card flex flex-col">
                            <div className="rounded-2xl bg-slate-100 p-8">
                                <p className="text-xl font-semibold text-left">
                                    Find <span className="text-primaryColor">deals</span>, <span className="text-[#009B00]">Free Delivery</span>, and more from our restaurant
                                    partners.
                                </p>
                                <p className="flex justify-end text-2xl my-1 p-1 rounded-full">
                                    <img src={illustrations.src} className="w-36 float-left " />
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="m-6">
                        <div className="mx-[9%] justify-end cards gap-6 flex">
                            <div className="text">
                                <p className="">
                                    <img src={comma.src} alt="" />
                                    <p className="text-left py-8">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                                </p>
                            </div>
                            <div className="card flex flex-col">
                                <div className="rounded-2xl img bg-slate-100 p-8">
                                    <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                        🍕
                                    </p>
                                    <p className="text-1xl">Pizza</p>
                                </div>
                            </div>
                            <div className="card flex flex-col">
                                <div className="rounded-2xl img bg-slate-100 p-8">
                                    <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                        🍔
                                    </p>
                                    <p className="text-1xl">Pizza</p>
                                </div>
                            </div>
                            <div className="card flex flex-col">
                                <div className="rounded-2xl img bg-slate-100 p-8">
                                    <p className="text-3xl my-3 bg-[#FAFAFA] p-3 rounded-full">
                                        🍣
                                    </p>
                                    <p className="text-1xl">Pizza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dishes;
