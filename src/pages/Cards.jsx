import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { useRouter } from "next/router";

/* страница с карточками */
const Cards = () => {
  const [cardsData, setCardsData] = useState([]); // State для хранения карточек

  const router = useRouter(); // Хук для роутинга (постраничный переход)

  // Обработка события по клику на карточку
  const handleCardClick = (card) => {
    router.push({
      pathname: `/card/${card.id}`,
      query: card,
    });
  };

  // Функция подгрузки данных
  const fetchCardsData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products`);

      const data = await response.json();

      const formattedData = data.map((item) => ({
        id: item?.id,
        title: item?.name,
        description: item?.category,
        imageUrl: item?.imgSrc,
      }));

      console.log(formattedData);

      setCardsData(formattedData);
    } catch (error) {
      console.error("Error data fetching", error);
    }
  };

  useEffect(() => {
    fetchCardsData();
  }, []);

  return (
    <section className="pt-20 cards">
      <div className="container">
        <h3>Details page</h3>

        <div className="flex justify-between flex-wrap">
          {cardsData.map((card) => (
            <Card
              key={card?.id}
              id={card?.id}
              title={card?.title}
              description={card?.title}
              image={card?.imageUrl}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
