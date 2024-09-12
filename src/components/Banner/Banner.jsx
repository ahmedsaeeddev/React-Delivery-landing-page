import Button from "../Button/Button"
import { orderNow } from "../../Utils/Constants/Button"
import { img } from "../../Utils/Constants/img"

const Banner = () => {
    return (
        <>
            <div className="flex items-center gap-16 p-20 justify-center">
                <div className="textArea">
                    <h1 className="text-4xl my-4 font-semibold">Your Favorite Food
                        <br />Delivery Partner</h1>
                    <p>The food at your doorstep. Why starve when you have us. You
                        <br />hunger partner. Straight out of the oven to your doorstep. </p>
                    <input className="p-3 px-5 my-4 bg-gray-100 rounded-full w-80 outline-none" type="text" placeholder="Enter your delivery location" id="" />
                    <Button data={orderNow.text} />
                </div>
                <div className="imgArea">
                    <img src={img.src} alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner