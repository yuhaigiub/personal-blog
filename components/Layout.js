import React from "react";
import Link from "next/link";

const pages = [
	{ name: "Home", link: "/" },
	{ name: "Features", link: "/features" },
	{ name: "Lifestyle", link: "/lifestyle" },
	{ name: "Blog", link: "/blog" },
	{ name: "Contact", link: "/contact" },
];

const Layout = ({ children }) => {
	return (
		<div className="mx-10">
			<header className="flex justify-between items-center h-12">
				<div className="text-4xl">Search</div>
				<div className="text-4xl font-semibold">
					This is a header
				</div>
				<div className="text-4xl">Mail</div>
			</header>
			<nav className="flex items-center justify-center bg-white">
				{pages.map((page) => {
					return (
						<Link key={page.name} href={page.link}>
							<a className="px-6 py-4 font-semibold text-lg hover:text-red-600 hover:underline">
								{page.name}
							</a>
						</Link>
					);
				})}
			</nav>
			<main className="my-5">{children}</main>
			<footer className="bg-red-300 h-24 flex items-center justify-center text-4xl font-semibold">
				This is a footer
			</footer>
		</div>
	);
};

export default Layout;
