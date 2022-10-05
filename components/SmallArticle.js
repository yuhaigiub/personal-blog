import React from "react";
import Link from "next/link";

const SmallArticle = ({ bg }) => {
	return (
		<div className="flex items-center gap-x-4">
			{/*image here */}
			<Link href="/">
				<div
					className={`w-1/3 h-24 ${bg} hover:cursor-pointer`}
				/>
			</Link>
			<div>
				<p className="text-slate-500">Tag</p>
				<Link href="/">
					<a className="hover:text-red-500">
						<h3 className="text-2xl font-semibold">
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
