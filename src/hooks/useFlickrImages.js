import { useEffect, useState } from "react";
import fetch from "node-fetch";

export const useFlickrImages = (tag, page = 1) => {
  const [currentPage, setPage] = useState(page);
  const [images, setImages] = useState([]);
  const [error, setError] = useState();

  const requestNewImages = async (tag, page = 1) => {
    const apiKey = "e1c31277930ea3959982861072d3a5da";

    try {
      const result = await fetch(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&privacy_filter=1&safe_search=1&extras=description%2C+owner_name%2C+tags&per_page=30&page=${page}&format=json&nojsoncallback=1`
      );
      const json = await result.json();

      if (page === 1) {
        setImages(json?.photos?.photo || []);
      } else {
        setImages((images) => [...images, ...(json?.photos?.photo || [])]);
      }
    } catch (err) {
      setImages([]);
      setError(err);
    }
  };

  useEffect(() => {
    requestNewImages(tag, currentPage);
  }, [tag, currentPage]);

  const loadMore = () => {
    console.log("loading more", page + 1);
    setPage((page) => page + 1);
  };

  return [images, error, requestNewImages, loadMore];
};
