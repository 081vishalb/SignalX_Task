

import React, { createContext } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getData, postData } from '../apiCalls/apiCalls';

const ProductContext = createContext({
    products: [],
    totalPages: 0,
    currentPage: 1,
    addProduct: (product) => { },
    fetchProducts: () => { },
});

const ProductProvider = ({ children }) => {
    const { data, isLoading, error, refetch } = useQuery(
        'products',
        getData,
    );

    const queryClient = useQueryClient();

    const { mutate: mutatePostProduct,
        data: newData,
        isLoading: postLoading,
        reset
    } = useMutation({
        mutationFn: postData,
        onMutate: () => {
            // triggers before mutation
        },
        onSuccess: (data, variables, context) => {
            // triggers after mutation
            queryClient.invalidateQueries({
                queryKey: ['products'],
                exact: true
            })
        }
    })



    const spinner = isLoading != undefined && isLoading != null ? isLoading : false;
    const products = data ? data : [];
    const totalPages = data ? Math.ceil(data.length / 5) : 0
    const currentPage = 1;

    const addProduct = async (product) => {
        const newProductList = { id: String(products.length + 1), ...product };
        mutatePostProduct(newProductList);
    };

    const fetchProducts = () => {
        refetch(); // Trigger refetch using react-query
    };

    const value = {
        products: products,
        totalPages: totalPages,
        currentPage: currentPage,
        addProduct: addProduct,
        fetchProducts: fetchProducts,
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductProvider };
