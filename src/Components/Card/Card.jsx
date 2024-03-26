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
            <h2 className="text-xl font-bold text-center">Books</h2>
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                {
                    card.map(cards => <Cards cards={cards} key={cards.bookId}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;