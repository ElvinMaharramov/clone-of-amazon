import { addToCart, addToFavorite } from '@/redux/slice/NextSlice';

import Image from 'next/image';
import { useRouter } from 'next/router';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import FormattedPrice from '@/components/formattedPrice/FormattedPrice';

import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';

import { PulseLoader } from 'react-spinners';

const DynamicPage = () => {

    const [product, setProduct] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        setProduct(router.query);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [router.query]);

    const dispatch = useDispatch();


    return (

        <div className='max-w-screen-xl mx-auto px-4 py-4 md:py-10'>

            {
                isLoading ? (
                    <div className='w-full flex flex-col gap-6 items-center justify-center py-20'>
                        <p>Your product is loading ...</p>
                        <PulseLoader color='#febd69' size='25px' />
                    </div>
                ) : (
                    <div className='w-full grid md:grid-cols-3 gap-3 bg-gray-100 rounded-lg'>

                        <div className='flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden'>

                            {product.image && (
                                <Image
                                    src={product.image}
                                    alt='ProductImage'
                                    width={500}
                                    height={500}
                                    className='object-cover'
                                    priority
                                />
                            )}

                            <div className='w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col
              translate-x-20 group-hover:-translate-x-2 transition-transform duration-300'>

                                <span
                                    className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl
                bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() =>
                                        dispatch(
                                            addToCart({
                                                _id: product._id,
                                                brand: product.brand,
                                                category: product.category,
                                                image: product.image,
                                                description: product.description,
                                                isNew: product.isNew,
                                                oldPrice: product.oldPrice,
                                                price: product.price,
                                                title: product.title,
                                                quantity: 1,
                                            })
                                        )
                                    }>
                                    <HiShoppingCart />
                                </span>

                                <span className='w-full h-full border-b-[1px] border-gray-400 flex items-center justify-center text-xl
                bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300'
                                    onClick={() =>
                                        dispatch(
                                            addToFavorite({
                                                _id: product._id,
                                                brand: product.brand,
                                                category: product.category,
                                                image: product.image,
                                                description: product.description,
                                                isNew: product.isNew,
                                                oldPrice: product.oldPrice,
                                                price: product.price,
                                                title: product.title,
                                                quantity: 1,
                                            })
                                        )
                                    }
                                >
                                    <FaHeart />

                                </span>

                            </div>

                        </div>

                        <div className='md:col-span-2 flex flex-col gap-3 justify-center p-4'>
                            <p className='text-xs md:text-sm text-amazon_blue font-semibold -mb-3'>{product.category} - {product.brand}</p>
                            <h1 className='text-xl md:text-3xl tracking-wide font-semibold'>{product.title}</h1>
                            <p className='text-sm text-gray-600'>{product.description}</p>
                            <div>
                                <p className='text-base text-gray-600 flex items-center gap-1'>
                                    Price {''}
                                    <span className='text-lg text-amazon_blue font-semibold'>
                                        <FormattedPrice amount={product.price} />
                                    </span>
                                    <span className='ml-1 line-through'>
                                        <FormattedPrice amount={product.oldPrice} />
                                    </span>
                                </p>
                                <p className='text-sm text-gray-500 flex items-center gap-1'>
                                    Your saved:{''}
                                    <span>
                                        <FormattedPrice amount={product.oldPrice - product.price} />
                                    </span>
                                </p>
                                <button onClick={() => dispatch(addToCart({
                                    _id: product._id,
                                    brand: product.brand,
                                    category: product.category,
                                    image: product.image,
                                    description: product.description,
                                    isNew: product.isNew,
                                    oldPrice: product.oldPrice,
                                    price: product.price,
                                    title: product.title,
                                    quantity: 1,
                                }))} className='w-full md:w-96 h-12 bg-amazon_blue text-gray-200 hover:bg-amazon_yellow
                        hover:text-amazon_blue duration-300 rounded-lg mt-5 text-base font-semibold'>Add to cart</button>
                            </div>
                        </div>

                    </div>
                )
            }

        </div>

    )
};

export default DynamicPage;