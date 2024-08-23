import React from 'react';

import { useDispatch } from 'react-redux';

import Image from 'next/image';

import FormattedPrice from '../formattedPrice/FormattedPrice';
import { addToCart, deleteFavoriteProduct } from '@/redux/slice/NextSlice';
import ResetFavoriteItems from '../resetFavoriteItems/ResetFavoriteItems';

interface Item {
    _id: number;
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    quantity: number;
};

interface favoriteProductProps {
    item: Item;
};

const FavoriteProduct = ({ item }: favoriteProductProps) => {

    const dispatch = useDispatch();

    return (
        <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row py-2 items-center gap-4 mb-2'>
            <Image
                src={item.image}
                alt='Product image'
                width={150}
                height={150}
                priority
            />

            <div className='flex items-center px-2 gap-4'>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
                    <p className='text-sm text-gray-500'>{item.description}</p>
                    <p
                        className='text-sm text-gray-600'>
                        Unit Price: {''}
                        <span className='font-semibold text-amazon_blue'>
                            <FormattedPrice amount={item.price} />
                        </span>
                    </p>
                    <button
                        onClick={() => {
                            dispatch(addToCart({
                                _id: item._id,
                                brand: item.brand,
                                category: item.category,
                                image: item.image,
                                description: item.description,
                                isNew: item.isNew,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                title: item.title,
                                quantity: 1,
                            })) && dispatch(deleteFavoriteProduct(item._id));
                        }
                        }
                        className='w-44 h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow
                        duration-300 hover:text-black mt-2'>
                        Add to cart
                    </button>
                </div>
                <div className='text-lg font-semibold text-amazon_blue'>
                    <FormattedPrice amount={item.price * item.quantity} />
                </div>
            </div>
        </div>
    );
};

export default FavoriteProduct;