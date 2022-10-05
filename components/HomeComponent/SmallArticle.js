import React from "react";
import Link from "next/link";

const SmallArticle = ({ bg }) => {
	return (
		<div className="w-full sm:flex sm:items-center sm:gap-x-4 mb-1 sm:mb-0 shadow-lg">
			{/*image here */}
			<Link href="/">
				<a className="inline-block w-full sm:w-1/3">
					<div className={`h-32 sm:h-24 ${bg}`} />
				</a>
			</Link>
			<div>
				<p className="text-slate-500">Tag</p>
				<Link href="/">
					<a className="hover:text-red-500">
						<h3 className="text-2xl font-semibold inline-block">
							This is a small Title
						</h3>
					</a>
				</Link>
				<div className="flex gap-x-4">
					<p className="text-slate-500">4 Min Read</p>
					<p className="text-slate-500">July 11, 2022</p>
				</div>
			</div>
		</div>
	);
};

export default SmallArticle;
