import CardItem from "./CardItem";
import cardsData from "../../../data/cards.json";
import { MainContext, useContext } from '../../../context';
import React, { useState, useEffect } from "react";


export default function Card (){

    const data = cardsData;
    const [cardItems, setCardItems] = useState([]);
    const { selectCategory } = useContext(MainContext);

    useEffect(() => {
        // setCardItems(data.filter(item => item.category_id === selectCategory)) real filter
         setCardItems(data) // fake filter
    },[selectCategory]);

    return (
        <div className="card-list container">
            {
                cardItems.map((item, index) => <CardItem item={item} key={index} />)
            }
        </div>
    )
}