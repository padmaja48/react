import * as productApi from '../api/productApi';

export const fetchAllProducts = async () => {
  try {
    const response = await productApi.getProducts();
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const addNewProduct = async (productData) => {
  try {
    const response = await productApi.createProduct(productData);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};