import { appleLogo } from "../../Utils/Constants/img";
const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
                <div className="flex px-[24px] items-center">
                    <p role="img" aria-label="Pizza Emoji" className="text-3xl">
                        🍕
                    </p>
                </div>
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-8">

                <div className="flex items-center space-x-4">
                    <a href="#appstore" className="block">
                        <img
                            src={appleLogo.src}
                            alt="App Store"
                            className="border h-12 w-24"
                        />
                    </a>
                    <a href="#googleplay" className="block">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-12"
                        />
                    </a>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center sm:text-left">
                    <div>
                        <h4 className="font-bold">Quick links</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#features" className="hover:underline">Features</a></li>
                            <li><a href="#menu" className="hover:underline">Food Menu</a></li>
                            <li><a href="#offer" className="hover:underline">Offer</a></li>
                            <li><a href="#review" className="hover:underline">Review</a></li>
                            <li><a href="#rider" className="hover:underline">Rider</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Get to Know Us</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#giftcards" className="hover:underline">Gift Cards</a></li>
                            <li><a href="#stories" className="hover:underline">DoorDash Stories</a></li>
                            <li><a href="#linkedin" className="hover:underline">LinkedIn</a></li>
                            <li><a href="#glassdoor" className="hover:underline">Glassdoor</a></li>
                            <li><a href="#accessibility" className="hover:underline">Accessibility</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">News</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#blog" className="hover:underline">Blog</a></li>
                            <li><a href="#faq" className="hover:underline">FAQ</a></li>
                            <li><a href="#media" className="hover:underline">Lift Media</a></li>
                            <li><a href="#press" className="hover:underline">Press</a></li>
                            <li><a href="#pressekit" className="hover:underline">Presse kit</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold">Contact</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#whatsapp" className="hover:underline">WhatsApp</a></li>
                            <li><a href="#support" className="hover:underline">Support 24</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container justify-between mx-auto mt-8 flex items-center text-center text-gray-400">
                <p>© 2023 pizza. All rights reserved</p>
                <div className="mt-4 space-x-4 ">
                    <a href="#privacy" className="hover:underline">Privacy</a>
                    <a href="#policy" className="hover:underline">Policy</a>
                    <a href="#terms" className="hover:underline">Terms</a>
                    <a href="#services" className="hover:underline">Services</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
