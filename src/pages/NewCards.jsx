import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import { useRouter } from "next/router";

/* страница с карточками */
const NewCards = () => {
  const [newcardsData, setnewCardsData] = useState([]); // State для хранения карточек

  const router = useRouter(); // Хук для роутинга (постраничный переход)

  // Обработка события по клику на карточку
  const handleCardClick = (card) => {
    router.push({
      pathname: `/newcard/${card.id}`,
      query: card,
    });
  };

  // Функция подгрузки данных
  const fetchNewCardsData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=phone`);

      const data = await response.json();

      const formattedData = data.products.map((item) => ({
        id: item?.id,
        title: item?.title,
        description: item?.description,
        imageUrl: item?.images && item.images.length >= 3 ? item.images[2] : null,
        price: item?.price,
        rating: item?.rating
      }));

      console.log(formattedData);

      setnewCardsData(formattedData);
    } catch (error) {
      console.error("Error data fetching", error);
    }
  };

  useEffect(() => {
    fetchNewCardsData();
  }, []);

  return (
    <section className="pt-20 cards">
      <div className="container">
        <h3>Details page</h3>

        <div className="flex justify-between flex-wrap">
          {newcardsData.map((card) => (
            <Card
              key={card?.id}
              id={card?.id}
              title={card?.title}
              description={card?.description}
              image={card?.imageUrl}
              price={card?.price}
              rating={card?.rating}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCards;
