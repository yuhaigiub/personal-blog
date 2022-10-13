import React from "react";
import Link from "next/link";
import Image from "next/future/image";

const SmallArticle = ({ title, img, category, id, date }) => {
	const postLink = `/posts/${id}`;

	return (
		<div className="w-full sm:flex sm:items-center sm:gap-x-4 mb-1 sm:mb-0 shadow-2xl bg-white">
			{/*image here */}
			<Link href={postLink}>
				<a className="inline-block">
					<div
						className={`w-40 lg:w-28 xl:w-40 h-32 lg:h-20 xl:h-32 bg-red-300`}>
						<Image
							src={img}
							alt="cannot load"
							width={1024}
							height={720}
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
				</a>
			</Link>
			<div className="h-32 lg:h-20 xl:h-32 flex flex-col space-y-1 py-3 lg:py-1 pr-2">
				<p className="text-slate-500">{category}</p>
				<Link href={postLink}>
					<a className="hover:text-red-500">
						<h3 className="w-full h-10 lg:h-9 xl:h-14 text-lg overflow-hidden font-semibold inline-block">
							{title}
						</h3>
					</a>
				</Link>
				<div className="flex gap-x-4 overflow-hidden">
					<p className="text-slate-500 lg:hidden xl:block">4 Min Read</p>
					<p className="text-slate-500 lg:hidden xl:block">
						{new Date(date).toDateString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SmallArticle;
