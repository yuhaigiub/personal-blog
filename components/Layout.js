import React from "react";
import Link from "next/link";
import ArchiveList from "./HomeComponent/ArchiveList";

const pages = [
	{ name: "Home", link: "/" },
	{ name: "Features", link: "/features" },
	{ name: "Lifestyle", link: "/lifestyle" },
	{ name: "Blog", link: "/blog" },
	{ name: "Contact", link: "/contact" },
];

const Layout = ({ children }) => {
	return (
		<div className="lg:mx-10 md:mx-8 mx-2 bg-slate-100 sm:bg-white">
			<header className="flex justify-between items-center h-12 bg-white">
				<div className="lg:text-4xl md:text-3xl text-xl">
					Search
				</div>
				<div className="lg:text-4xl md:text-3xl text-xl font-semibold">
					This is a header
				</div>
				<div className="lg:text-4xl md:text-3xl text-xl">
					Mail
				</div>
			</header>
			<nav className="flex items-center justify-center bg-white">
				{pages.map((page) => {
					return (
						<Link key={page.name} href={page.link}>
							<a className="hidden sm:inline md:text-lg px-6 py-2 md:py-4 text-md  font-semibold hover:text-red-600 hover:underline">
								{page.name}
							</a>
						</Link>
					);
				})}
			</nav>
			<div className="flex my-6">
				<main className="w-4/6 bg-white">
					<div>{children}</div>
				</main>
				<div className="w-1/3 px-12 flex flex-col space-y-12">
					<div>
						<h2 className="text-3xl font-semibold my-9">
							Search
						</h2>
						<form className="flex space-x-3">
							<input
								type="text"
								id="search"
								name="fname"
								className="bg-white border-4 border-blue-500 h-12 w-full"
							/>
							<button
								type="submit"
								className="bg-blue-500 px-4 text-white font-semibold">
								Search
							</button>
						</form>
					</div>
					<ArchiveList />
				</div>
			</div>
			<footer className="bg-red-300 h-24 flex items-center justify-center text-4xl font-semibold">
				This is a footer
			</footer>
		</div>
	);
};

export default Layout;
