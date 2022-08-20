import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {MdAdd, MdHome, MdLogout, MdMenu, MdSettings, MdShoppingBasket, MdSupervisedUserCircle} from "react-icons/md";
import {motion} from "framer-motion";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {app} from "../firebase.config";


import Logo from "../images/logo.png"
import Avatar from "../images/avatar.png"
import {useStateValue} from "../context/StateProvider";
import {actionType} from "../context/reducers";


function Header() {
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user}, dispatch] = useStateValue();

    const [menu, setMenu] = useState(false);

    const login = async () => {
        if (!user) {
            const {user: {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            })
            localStorage.setItem('user', JSON.stringify(providerData[0]))
        } else {
            setMenu(!menu);
        }
    }
    const logOut = async () => {
        setMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null
        })
    }


    return (
        <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
            {/*  desktop tablet*/}
            <div className="hidden md:flex w-full h-full items-center justify-between">
                <Link to={"/"} className="flex items-center gap-2">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-8 object-cover"
                    />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>
                <div className="flex justify-center gap-8">
                    <motion.ul
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}
                        className="flex items-center gap-8 ">
                        <li className="font-bold text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-shadow ease-in-out">Home</li>
                        <li className="font-bold text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-shadow ease-in-out">Menu</li>
                        <li className="font-bold text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-shadow ease-in-out">About
                            us
                        </li>
                        <li className="font-bold text-base cursor-pointer text-textColor hover:text-headingColor duration-100 transition-shadow ease-in-out">Service</li>
                    </motion.ul>

                    <div className="relative flex items-center">
                        <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
                        <div
                            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                            <p className="text-xs text-white font-semibold">2</p>
                        </div>
                    </div>

                    <div className="relative">
                        <motion.img
                            whileTap={{scale: 0.6}}
                            src={user ? user.photoURL : Avatar}
                            alt="Avatar"
                            className="w-10 min-w-[40px] min-h-[40px] h-10 drop-shadow-2xl cursor-pointer rounded-full"
                            onClick={login}
                        />
                        {
                            menu && (
                                <motion.div
                                    initial={{opacity: 0, scale: 0.6}}
                                    animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0.6}}
                                    className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute px-4 py-2 top-12 right-0">
                                    {user && user.email === "anhdq.1999@gmail.com" && (
                                        <Link to={'/createItem'}>
                                            <p
                                                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                                <MdAdd/>
                                                New Item
                                            </p>
                                        </Link>
                                    )}
                                    <p
                                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                        onClick={logOut}
                                    >
                                        <MdLogout/>
                                        Logout
                                    </p>
                                </motion.div>
                            )
                        }
                    </div>

                </div>
            </div>
            {/*mobile*/}
            <div className="flex items-center justify-between md:hidden h-full w-full">
                <div className="relative flex items-center">
                    <MdShoppingBasket className="text-textColor text-2xl cursor-pointer"/>
                    <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">2</p>
                    </div>
                </div>
                <Link
                    to={"/"}
                    className="flex items-center gap-2"
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-8 object-cover"
                    />
                    <p className="text-headingColor text-xl font-bold">City</p>
                </Link>

                <div className="relative">
                    <motion.img
                        whileTap={{scale: 0.6}}
                        src={user ? user.photoURL : Avatar}
                        alt="Avatar"
                        className="w-10 min-w-[40px] min-h-[40px] h-10 drop-shadow-2xl cursor-pointer rounded-full"
                        onClick={login}
                    />
                    {
                        menu && (
                            <motion.div
                                initial={{opacity: 0, scale: 0.6}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.6}}
                                className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute px-4 py-2 top-12 right-0">
                                {user && user.email === "anhdq.1999@gmail.com" && (
                                    <Link to={'/createItem'}>
                                        <p
                                            className="px-4 py-2 justify-items-start flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                            <MdAdd/>
                                            New Item
                                        </p>
                                    </Link>

                                )}
                                <ul className="flex flex-col py-4 px-2 gap-8">
                                    <li className="flex justify-items-start px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        <MdHome/> Home
                                    </li>
                                    <li className="flex justify-items-start px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        <MdMenu/> Menu
                                    </li>
                                    <li className="flex justify-items-start px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        <MdSupervisedUserCircle/> About us
                                    </li>
                                    <li className="flex justify-items-start px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                                        <MdSettings/>
                                        Service
                                    </li>
                                </ul>
                                <p
                                    className="px-4 py-2 justify-items-start flex items-center gap-3 bg-slate-300 cursor-pointer active:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                                    onClick={logOut}
                                >
                                    <MdLogout/>
                                    Logout
                                </p>
                            </motion.div>
                        )
                    }
                </div>

            </div>
        </header>
    );
}

export default Header;