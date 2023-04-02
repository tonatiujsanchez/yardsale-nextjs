import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);

	const getProducts = async() => {
		const response = await axios(API);
		setProducts(response.data.filter((item) => {
			return item.id < 200;
		  }));
	}

	useEffect(() => {
		if( products.length <= 0 ){
			getProducts()
		}
	}, [API]);

	return products;
};

export default useGetProducts;

