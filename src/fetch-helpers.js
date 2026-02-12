export const getProducts = () => {
  return fetch('https://dummyjson.com/products')
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      return { data: data.products, error: null };
    })
    .catch((error) => {
      console.error(error.message);
      return { data: null, error };
    });
};

export const getProductById = (id) => {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};

export const getProductBySearchTerm = async (query) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    if (!response.ok) {
      throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return { data: data.products, error: null };
  }
  catch (error) {
    console.error(error.message);
    return { data: null, error };
  }
};
