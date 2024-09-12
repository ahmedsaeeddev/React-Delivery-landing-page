import Button from "../Button/Button"
import { data } from "../../Utils/Constants/Button"
const Header = () => {
    return (
        <div className="nav flex justify-between items-center p-10 w-[80%] m-[auto]">
            <div className="logo text-3xl">
                🍕
            </div>
            <div className="links m-auto">
                <a href="" className="p-2 hover:border-b-primaryColor hover:border-x-2">Restaurants</a>
                <a href="" className="p-2 hover:border-b-primaryColor hover:border-x-2">Recipes</a>
                <a href="" className="p-2 hover:border-b-primaryColor hover:border-x-2">About</a>
                <a href="" className="p-2 hover:border-b-primaryColor hover:border-x-2">Page</a>
            </div>
            <div className="loinSignUp">
                <button className="w-20 p-2 hover:border-b-primaryColor hover:border-x-2">Login</button>
                <Button data={data.text} />
            </div>
        </div>
    )
}

export default Header