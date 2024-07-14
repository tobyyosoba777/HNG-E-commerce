import axios from 'axios';


export const fetchData = async (endpoint) => {
  const resourceUrl = "https://timbu-get-single-product.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a"
  const useEndpoint = endpoint === "/" ? resourceUrl : resourceUrl + endpoint;
  try {
    const urll = `https://timbu-get-all-products.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a?organization_id=${import.meta.env.VITE_ORG_ID}&reverse_sort=false&page=1&size=10&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`
    const response = await axios.get(urll)
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
