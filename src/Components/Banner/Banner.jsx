
const Banner = () => {
    return (
        <div className="hero p-16 rounded-lg bg-base-200">
            <div className=" hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/fDJbhDV/Book1.png" className="max-w-sm w-52 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Books to freshen up your bookshelf!</h1>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;