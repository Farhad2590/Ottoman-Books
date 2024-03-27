

const Online = () => {
    return (
        <div>
            <div className="flex flex-col items-center my-5">
                <h2 className="text-2xl mb-5 font-extrabold">Pick Your Offline Plan</h2>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                   
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Per-Book Delivery</h2>
                            <h2 className="mb-1 text-lg">Fee: <br /><span className="text-lg lg:text-4xl font-extrabold">$14.99</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            <li>Customers pay a fixed fee for each book delivered offline</li>
                            <li>Fee varies based on delivery location and urgency.</li>
                            <li>Additional charges may apply for expedited delivery.</li>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Subscription-Based Delivery</h2>
                            <h2 className="mb-1 text-lg">Fee:  <br /><span className="text-lg lg:text-4xl font-extrabold">$24.99</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            <li> Customers pay a monthly or annual subscription fee for unlimited offline book deliveries within a specified area.</li>
                            <li>Different subscription tiers based on delivery frequency and coverage area.</li>
                        </div>
                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Flat Rate Delivery </h2>
                            <h2 className="mb-1 text-lg">Fee: <br /><span className="text-lg lg:text-4xl font-extrabold">$34.99</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            <li>A flat fee is charged for each delivery, regardless of the number of books ordered.</li>
                            <li>Fee may vary based on location and delivery speed.</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Online;