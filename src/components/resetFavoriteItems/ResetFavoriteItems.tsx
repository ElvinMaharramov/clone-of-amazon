import React from 'react';

import { useDispatch } from 'react-redux';

import { resetFavoriteCart } from '@/redux/slice/NextSlice';

const ResetFavoriteItems = () => {

  const dispatch = useDispatch();

  const handleResetCart = () => {
    const confirmReset = window.confirm('Are you sure you want to remove products from your card?');
    if (confirmReset) {
      dispatch(resetFavoriteCart())
    };
  };

  return (
    <div>
      <button
        onClick={handleResetCart}
        className='w-44 h-10 font-semibold bg-amazon_yellow text-black rounded-lg hover:bg-red-500
            hover:text-black duration-300'
      >
        Reset Cart
      </button>
    </div>
  );
};

export default ResetFavoriteItems;