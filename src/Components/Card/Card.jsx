// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
const Card = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCard(data))
    })
    // const card = useLoaderData()
    return (
        <div>
            <div className="my-5 flex items-center justify-center py-5 bg-green-200 rounded-lg">
                <h2 className="text-3xl font-bold">Books</h2>
            </div>
            <div className="grid justify-center mb-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    card.map(cards => <Cards cards={cards} key={cards.bookId}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;