import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useSession, signIn, signOut } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';

import { StateProps, StoreProduct } from '../../../type';
import { addUser } from '@/redux/slice/NextSlice';

import SearchProducts from '../searchProducts/SearchProducts';

import { BiCaretDown } from 'react-icons/bi';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import logo from '../../images/logo/amazon-logo.png';
import cartIcon from '../../images/icons/cart-icon.png';


const Header = () => {

    const [allData, setAllData] = useState([]);
    const { data: session } = useSession();

    const { productData, favoriteData, userInfo, allProducts } = useSelector((state: StateProps) => state.next);
    // console.log(session);

    const dispatch = useDispatch();

    interface Category {
        category: string;
        // diğer özellikler varsa buraya ekleyin
    };

    // const [allCategories, setAllCategories] = useState([]);
    const [allCategories, setAllCategories] = useState<Category[]>([]);

    useEffect(() => {
        setAllCategories(allProducts.allProducts)
    }, [allProducts]);
    // console.log(allCategories, 'AAA');

    useEffect(() => {
        setAllData(allProducts.allProducts)
    }, [allProducts]);


    useEffect(() => {
        if (session) {
            dispatch(addUser({
                name: session?.user?.name,
                email: session?.user?.email,
                image: session?.user?.image,
            })
            );
        }
    }, [session]);

    // Search area
    // console.log('All Data:', allData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        const filtered = allData.filter((item: StoreProduct) => item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()));
        // console.log(filtered);
        setFilteredProducts(filtered);

    }, [searchQuery]);

    const [showAll, setShowAll] = useState(false);
    // console.log(showAll);

    return (
        <div className='w-full h-20 bg-amazon_blue text-light_text sticky top-0 z-50 '>
            <div className='h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4'>
                {/* Logo */}

                <Link href={'/'}
                    className='px-2 border border-transparent hover:border-white cursor-pointer duration-300
                flex items-center justify-center h-[70%]'>
                    <Image className='w-28 object-cover mt-1' src={logo} alt='logo' priority />
                </Link>

                {/* Delivery */}

                <div className='px-2 border border-transparent hover:border-white cursor-pointer duration-300
                items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
                    <SlLocationPin />
                    <div className='text-xs'>
                        <p>Deliver to</p>
                        <p className='text-white font-bold '>Azerbaijan</p>
                    </div>
                </div>

                {/* Searchbar */}

                <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
                    <span
                        className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300
                    text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md
                    text-gray-500 hover:text-black border-[3px] focus:border-amazon_yellow'
                        onClick={() => setShowAll(!showAll)}
                        tabIndex={0}
                    >
                        All <span></span>
                        <MdOutlineArrowDropDown className='text-xl' />
                    </span>
                    {
                        showAll && (
                            <div className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px]
                            border-amazon_blue text-black p-2 z-50absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
                            bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                                <ul className='flex flex-col gap-1'>
                                    {allCategories.map((item: Category, _id: number) => (
                                        <li key={_id} className='text-medium tracking-wide font-titleFont hover:bg-[#0085B8]
                                        cursor-pointer hover:font-semibold'>
                                            {item.category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                    <input
                        onChange={handleSearch}
                        value={searchQuery}
                        className='w-full h-full rounded-tr-md rounded-br-md px-2 placeholder:text-sm text-base text-black
                        border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow'
                        type="text"
                        placeholder='Search Amazon Clone'
                    />
                    <span className='w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center
                    justify-center absolute right-0 rounded-tr-md rounded-br-md'>
                        <HiOutlineSearch />
                    </span>

                    {/* Search field */}

                    {
                        searchQuery &&
                        <div className='absolute left-0 top-12 w-full mx-auto max-h-96 bg-gray-200 rounded-lg
                        overflow-y-scroll cursor-pointer text-black '>
                            {
                                filteredProducts.length > 0 ? (
                                    <>
                                        {
                                            searchQuery && filteredProducts.map((item: StoreProduct) => (
                                                <Link
                                                    className='w-full border-b-[1px] border-b-gray-400
                                                    flex items-center gap-4'
                                                    key={item._id}
                                                    href={{
                                                        pathname: `${item._id}`,
                                                        query: {
                                                            _id: item._id,
                                                            brand: item.brand,
                                                            category: item.category,
                                                            image: item.image,
                                                            description: item.description,
                                                            isNew: item.isNew,
                                                            oldPrice: item.oldPrice,
                                                            price: item.price,
                                                            title: item.title,
                                                        }
                                                    }}
                                                    onClick={() => setSearchQuery('')}
                                                >
                                                    <SearchProducts item={item} />
                                                </Link>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <div className='bg-gray-100 flex items-center justify-center py-5
                                    rounded-lg shadow-lg text-amazon_blue'>
                                        <p className='text-xl font-semibold animate-bounce'>The product you are looking for is not available. Please, try again</p>
                                    </div>
                                )
                            }
                        </div>
                    }

                    {/* Search field */}

                </div>

                {/* SignIn */}
                {
                    userInfo ? (
                        <div className='flex items-center px-2 border border-transparent hover:border-white
                    cursor-pointer duration-300 h-[70%] gap-1'>
                            <img
                                src={userInfo.image}
                                alt="userImage"
                                className='w-8 h-8 rounded-full object-cover'
                            />
                            <div className='text-xs text-gray-100 flex flex-col justify-between '>
                                <p className='text-white font-bold'>{userInfo.name}</p>
                                <p>{userInfo.email}</p>
                            </div>
                        </div>
                    ) : (
                        <div onClick={() => signIn()} className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white
                        cursor-pointer duration-300 h-[70%]'>
                            <p>Hello, Sign in</p>
                            <p className='text-white font-bold flex items-center'>
                                Account & Lists{''}
                                <span>
                                    <BiCaretDown />
                                </span>
                            </p>
                        </div>
                    )
                }

                {/* Favorite */}
                <Link
                    href={'/favorite'}
                    className='text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white
                cursor-pointer duration-300 h-[70%] relative'>
                    <p>Marked</p>
                    <p className='text-white font-bold '>& Favorite</p>
                    {
                        favoriteData.length > 0 &&
                        <span
                            className='absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center
                            text-xs text-amazon_yellow'>
                            {favoriteData.length}
                        </span>
                    }
                </Link>
                {/* Cart */}
                <Link href={'/Cart'} className='flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative'>
                    <Image
                        className='w-auto object-cover h-8'
                        src={cartIcon}
                        alt='cart-icon-img'
                    />
                    <p className='text-xs text-white font-bold mt-3'>Cart</p>
                    <span className='absolute text-sm text-amazon_yellow top-2 left-[31px] font-semibold'>
                        {productData ? productData.length : 0}
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default Header;