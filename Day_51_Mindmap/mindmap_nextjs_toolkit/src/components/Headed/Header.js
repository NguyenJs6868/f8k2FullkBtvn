'use client';
import { Box, useColorMode, useColorModeValue, Text } from '@chakra-ui/react';
import { usePathname } from '@/navigation';
import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from '@/navigation';
import { useSession } from 'next-auth/react';

import './header.scss';

export default function Header({ locale }) {
	const pathname = usePathname();
	const { data: session, status } = useSession();
	useEffect(() => {
		console.log(pathname);
	});
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<header className="header-component select-none fixed top-0 left-0 w-full">
				<Box
					backdropFilter="auto"
					backdropBlur="10px"
					className=" pt-[20px] pb-[20px] "
				>
					<nav className="header-nav flex justify-between items-center max-w-[1250px] mx-auto pl-[25px] pr-[25px] text-sky2-500">
						<div className="header-nav-wrap w-100 flex items-center ">

							<div className="flex items-center gap-x-[10px] mr-[20px]">
								{/* <img src="/img/logo_me.png" alt="logo.png" className="w-[40px]" /> */}
								<h1 className="text-2xl font-bold">
									<Link href="/">
										<Text
											bgGradient="linear(to-l, #7fdcff, #095fa0)"
											bgClip="text"
											fontSize="2xl"
											fontWeight="extrabold"
										>
											Mindmap Flow
										</Text>
									</Link>
								</h1>
							</div>

							<ul className="menu-tabs flex items-center gap-x-[16px] font-semibold text-xl">
								{/* <li className="cursor-pointer">
									<Link href="/">Home</Link>
								</li>
								<li className="cursor-pointer">
									<Link href="/blog">Blog</Link>
								</li>
								<li className="cursor-pointer">
									<Link href="/contact">Contact</Link>
								</li>
								<li className="cursor-pointer">
									<Link href="/profile">Profile</Link>
								</li> */}

                <li className="cursor-pointer">
                  <Link href="/">Trang chủ</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/">Giới thiệu</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/">Tính năng</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/">Bảng giá</Link>
                </li>
                <li className="cursor-pointer">
                  <Link href="/">Liên hệ</Link>
                </li>
							</ul>

						</div>
						<div className="flex items-center gap-x-[14px] text-xl">
							{/* <Link href="https://www.facebook.com/">
								<i className="fa-brands fa-facebook"></i>
							</Link> */}
							{/* <Link href="https://github.com/OkazakiTruong">
								<i className="fa-brands fa-github"></i>
							</Link> */}

							<Button
								onClick={toggleColorMode}
								colorScheme="blue"
								variant="ghost"
							>
								{colorMode === 'light' ? (
									<i className="fa-solid fa-moon"></i>
								) : (
									<i className="fa-solid fa-sun"></i>
								)}
							</Button>

							<button>
								<Link href="/auth">
									{session?.user?.image ? (
										<img
											src={session?.user?.image}
											alt=""
											className="w-[40px] rounded-[50%]"
										/>
									) : (
										<i className="fa-solid fa-user"></i>
									)}
								</Link>
							</button>

						</div>
					</nav>
				</Box>
			</header>
			{/*  */}
			<header className='d-none'>
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12 col-lg-12 col-xl-3">
							<div className="logo">
								<a href="/" title="logo">Mindmap Flow</a>
							</div>
							<div className="mob-menu">
								<span>
									<i className="fa fa-bars" />
								</span>
							</div>
						</div>
						<div className="col-md-12 col-sm-12 col-lg-12 col-xl-9">
							<div className="main-menu">

								<ul className="nav">
									<li><a href="/"> Home </a>
									</li>
									<li><a href="#"> Process </a>
									</li>
									<li><a href="#"> Blog </a>
									</li>
									<li><a href="#"> Contact Us </a>
									</li>
								</ul>

								<ul className="right-nav">
									<li><a href="#"><i className="fa fa-user" />Log in</a></li>
									<li className="active"><a href="#"><i className="fa fa-sign-in" />Sign up</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
