const Button = (data) => {
    return (
        <button className="bg-primaryColor hover:bg-white hover:text-primaryColor border-primaryColor border-2 hover:border-primaryColor text-white p-2 rounded-full w-32">{data.data}</button>
    )
}

export default Button