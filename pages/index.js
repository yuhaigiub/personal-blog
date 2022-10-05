import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import Article from "../components/Article";
import MostPopular from "../components/HomeComponent/MostPopular";
import CategoryList from "../components/HomeComponent/CategoryList";
import ArchiveList from "../components/HomeComponent/ArchiveList";

const Home = () => {
	return (
		<Layout>
			<Article bg={"bg-red-500"} />
			<div className="grid grid-cols-6 gap-x-4 gap-y-4">
				<div className="col-span-4 columns-2">
					<Article bg={"bg-blue-500"} />
					<Article bg={"bg-yellow-500"} />
					<Article bg={"bg-green-500"} />
					<Article bg={"bg-purple-500"} />
					<Article bg={"bg-pink-500"} />
					<Article bg={"bg-cyan-500"} />
				</div>
				<div className="col-span-2 p-4 flex flex-col gap-y-24">
					<MostPopular />
					<CategoryList />
					<ArchiveList />
					<div className="w-full h-32 bg-red-50"></div>
					<div className="w-full h-32 bg-red-50"></div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;
