import React from "react";

const SmallArticle = ({ bg }) => {
	return (
		<div className="flex items-center gap-x-4">
			<div className={`w-1/3 h-24 ${bg}`} />
			<div>
				<p className="text-slate-500">Tag</p>
				<h3 className="text-2xl font-semibold">
					This is a small Title
				</h3>
				<div className="flex gap-x-4">
					<p className="text-slate-500">4 Min Read</p>
					<p className="text-slate-500">July 11, 2022</p>
				</div>
			</div>
		</div>
	);
};

export default SmallArticle;
