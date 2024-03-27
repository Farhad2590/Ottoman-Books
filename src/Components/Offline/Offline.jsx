
const Offline = () => {
    return (
        <div>
            <div className="flex flex-col items-center my-5">
                <h2 className="text-2xl mb-5 font-extrabold">Pick Your Online Plan</h2>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Basic Tier</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$9.99</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            
                            <li>Access to a limited selection of books.</li>
                            <li>No limit on the number of books read per month.</li>
                            <li>Limited access to premium features like offline reading.</li>

                        </div>

                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                        <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Standard Tier</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$14.99</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            <li>No limit on the number of books read per month.</li>
                            <li>Ability to download books for offline reading on mobile devices.</li>
                            <li>Access to basic audiobook library.</li>

                        </div>

                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Premium Tier</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$24.99</span></h2>
                        </div>

                        <div className="">
                            <p>Features</p>
                            <li> No limit on the number of books read per month.</li>
                            <li>Priority access to new releases.</li>
                            <li>Ability to download books for offline reading on multiple devices.</li>
                        </div>

                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                        <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Family Plan</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$34.99</span></h2>
                        </div>
                    
                        <div className="">
                            <p>Features</p>
                            <li>Premium Tier benefits extended to 4 family members.</li>
                            <li>Each member receives personalized accounts and recommendations.</li>
                            <li>Create separate children's profiles with parental controls.</li>

                        </div>

                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                        <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Student Discount</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$7.99</span></h2>
                        </div>

                        <div className="">
                            <p>Features</p>
                            <li>No limit on the number of books read per month.</li>
                            <li>Ability to download books for offline reading on mobile devices.</li>
                            <li>Access to basic audiobook library.</li>

                        </div>

                    </div>
                    <div className="bg-slate-50 border border-gray-300 rounded-lg p-5">
                        <div className="text-center p-10">
                            <h2 className="text-green-400 mb-1 text-lg lg:text-xl font-bold">Ultimate Tier</h2>
                            <h2 className="mb-1 text-lg">Monthly Fee: <span className="text-lg lg:text-4xl font-extrabold">$39.9</span></h2>
                        </div>
                        <div className="">
                            <p>Features</p>
                            <li>Unlimited access to rare manuscripts, early drafts, and unreleased works.</li>
                            <li>Personalized recommendations from literary experts.</li>
                            <li>Access to virtual author events and book signings.</li>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offline;