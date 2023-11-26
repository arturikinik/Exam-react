import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const CardDetails = () => {
  const router = useRouter(); // Получаем объект router из Next.js

  console.log(`router`, router);

  const { id } = router.query; // Извлекаем id карточки из параметров запроса

  console.log("carddetails", id);

  const [cardData, setCardData] = useState(null); // State для хранения данных карточки

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await fetch(`/api/card/${id}`); // получаем тело запроса

        const data = await response.json(); // преобразуем данные асинхронно

        console.log("data", data);

        setCardData(data); // помещаем данные в стейт
      } catch (error) {
        console.error("Error data fetching", error);
      }
    };

    if (id) {
      fetchCardsData();
    }
  }, [id]);

  if (!id || !cardData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details pt-20">
      <div className="container">
        <h2>Card Details</h2>
        <p>Card id: {id}</p>

        <h2>{cardData?.name}</h2>
        <p>{cardData?.category}</p>
        <Image
          src={cardData?.imgSrc}
          alt={cardData.title}
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};

export default CardDetails;
