// pages/newcard/[id].js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const NewCardDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    const fetchNewCardData = async () => {
      try {
        const response = await fetch(`/api/newcard/${id}`);
        const data = await response.json();
        setCardData(data);
      } catch (error) {
        console.error("Error fetching new card data", error);
      }
    };

    if (id) {
      fetchNewCardData();
    }
  }, [id]);

  if (!id || !cardData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="details pt-20">
      <div className="container">
        <h2>New Card Details</h2>
        <p>Card id: {id}</p>
        <h2>{cardData?.title}</h2>
        <p>{cardData?.description}</p>
        <Image
          src={cardData?.imageUrl}
          alt={cardData.title}
          width={300}
          height={200}
        />
      </div>
    </section>
  );
};

export default NewCardDetails;
