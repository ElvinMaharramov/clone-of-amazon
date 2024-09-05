import React from 'react';

import { useSelector } from 'react-redux';

import Link from 'next/link';

import FavoriteProduct from '@/components/favoriteProduct/FavoriteProduct';
import ResetFavoriteItems from '@/components/resetFavoriteItems/ResetFavoriteItems';

import { StateProps, StoreProduct } from '../../type';


const FavoritePage = () => {

    const { favoriteData } = useSelector((state: StateProps) => state.next);
    // console.log('FavoriteData', favoriteData);

    return (
        <div className='max-w-screen-xl mx-auto px-6 gap-10 py-4'>
            {
                favoriteData.length > 0 ? (
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
                            <p className='text-2xl font-semibold text-amazon_blue'>Favorite Items</p>
                            <p className='text-lg font-semibold text-amazon_blue'>Action</p>
                        </div>
                        <div>
                            {favoriteData.map((item: StoreProduct, index: number) => (
                                <div className='mt-2' key={`${item._id}-${index}`}>
                                    {/* <FavoriteProduct key={`${item._id}-${index}`} item={item} /> */}
                                    <FavoriteProduct item={item} />
                                </div>
                            ))}
                            <ResetFavoriteItems />
                        </div>
                    </div>
                ) : (
                    <div className='bg-white h-64 col-span-5 flex flex-col items-center justify-center rounded-lg py-5 shadow-lg'>
                        <h1 className='text-lg font-medium'>You haven&apos;t added any favorite products yet.</h1>
                        <Link href='/'>
                            <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold
                      hover:bg-amazon_yellow hover:text-black mt-3'>Go to shopping</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default FavoritePage;