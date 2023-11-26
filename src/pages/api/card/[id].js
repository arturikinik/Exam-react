/**
 * Обработчик запроса для получения данных карточки по id
 * @param {Object} req - Объект запроса (request)
 * @param {Object} res - Объект ответа (response)
 * @returns {Promise<void>} - Промис без возвращаемого значения
 */

async function handler(req, res) {
  const { id } = req.query;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching card data", error);
    res.status(500).json({ error: "Error fetching card data" });
  }
}

export default handler;
