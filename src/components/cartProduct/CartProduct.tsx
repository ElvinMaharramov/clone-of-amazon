import React from 'react';

import { useDispatch } from 'react-redux';

import Image from 'next/image';

import FormattedPrice from '../formattedPrice/FormattedPrice';

import { decreaseQuantity, deleteProduct, increaseQuantity } from '@/redux/slice/NextSlice';

import { LuMinus, LuPlus } from 'react-icons/lu';
import { IoMdClose } from 'react-icons/io';

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
};

interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {

  const dispatch = useDispatch();

  return (
    <div className='bg-gray-200 rounded-lg flex items-center gap-4'>
      <Image
        src={item.image}
        alt='ProductImage'
        width={120}
        height={120}
        className='w-auto h-auto object-cover'
        priority
      />

      <div className='flex items-center px-2 gap-4'>

        <div className='flex flex-col gap-1'>
          <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
          <p className='text-sm text-gray-600'>{item.description}</p>
          <p className='text-sm text-gray-600'>
            Unit Price {''}
            <span className='font-semibold text-amazon_blue'>
              <FormattedPrice amount={item.price} />
            </span>
          </p>
          <div className='flex items-center gap-6 py-1'>

            <div className='flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full
            w-28 shadow-lg shadow-gray-300'>
              <span onClick={() => dispatch(decreaseQuantity({
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
              }))}
                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent
              hover:bg-gray-300 cursor-pointer decoration-purple-300'><LuMinus /></span>
              <span>{item.quantity}</span>
              <span onClick={() => dispatch(increaseQuantity({
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
              }))}
                className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent
              hover:bg-gray-300 cursor-pointer decoration-purple-300'><LuPlus /></span>
            </div>

            <div onClick={() => dispatch(deleteProduct(item._id))} className='flex items-center text-sm font-medium text-gray-500 hover:text-red-500
            cursor-pointer duration-300'>
              <IoMdClose className='mt-[3px]' /> <p>remove</p>
            </div>

          </div>

        </div>

        <div className='text-lg font-semibold text-amazon_blue'>
          <FormattedPrice amount={item.price * item.quantity} />
        </div>

      </div>
    </div>
  )
}

export default CartProduct;