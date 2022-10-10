import React from "react";
import { useState, useEffect } from "react";

import HomeLayout from "../components/HomeLayout";
import FirstArticle from "../components/HomeComponent/FirstArticle";
import Article from "../components/HomeComponent/Article";
import MostPopular from "../components/HomeComponent/MostPopular";
import CategoryList from "../components/HomeComponent/CategoryList";
import ArchiveList from "../components/HomeComponent/ArchiveList";
import { getPostData } from "../lib/utils";

export default function Home({ data }) {
	return (
		<HomeLayout>
			<FirstArticle {...data[0]} />
			<div className="lg:grid lg:grid-cols-6 lg:gap-x-4 lg:gap-y-4">
				<div className="lg:col-span-4 md:columns-2">
					{data.slice(1).map((value) => {
						return <Article key={value.title} {...value} />;
					})}
				</div>
				<div className="lg:col-span-2 lg:p-4 flex flex-col gap-y-12 lg:gap-y-24 overflow-hidden">
					<MostPopular posts={data.slice(0, 5)} />
					<CategoryList />
					<ArchiveList />
					<div className="w-full h-32 bg-red-50"></div>
					<div className="w-full h-32 bg-red-50"></div>
				</div>
			</div>
		</HomeLayout>
	);
}

export async function getStaticProps() {
	const data = getPostData();
	return {
		props: {
			data,
		},
	};
}
