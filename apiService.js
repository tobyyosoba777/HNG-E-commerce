import axios from 'axios';

// const API_KEY = process.env.REACT_APP_TIMBU_API_KEY;
// const BASE_URL = 'https://timbu-get-all-products.reavdev.workers.dev/?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=1&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473'; 

// const apiClient = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     'Authorization': Bearer ${API_KEY},
//   },
// });



export const fetchData = async (endpoint) => {
  const resourceUrl = "https://timbu-get-single-product.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a"
  const useEndpoint = endpoint === "/" ? resourceUrl : resourceUrl + endpoint;
  try {
    // const response = await axios.get(${useEndpoint}?organization_id=${import.meta.env.VITE_ORG_ID}&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY})
    // const urll = "https://timbu-get-all-products.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=1&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473"
    // const urll = "https://timbu-get-all-products.reavdev.workers.dev/3902678375224b58bee75c5b54ff8d0a?organization_id=ca7b597cebd049f6bc533f71d63661be&reverse_sort=false&page=1&size=10&Appid=2JKQ8NFUUQSV2LQ&Apikey=bb65a8a2ce1f4ab2b9b2f144bbecc96620240713125415418473"
    // const response = await axios.get(urll)
    const response = await axios.get(useEndpoint)
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};