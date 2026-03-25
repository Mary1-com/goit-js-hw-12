import axios from "axios";

const API_KEY = "55062320-0440d879b5463c33572d356a2"; 

export async function getImagesByQuery(query, page) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data;
}
