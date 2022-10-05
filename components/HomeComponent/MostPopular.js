import React from "react";
import SmallArticle from "../SmallArticle";

const MostPopular = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold mb-9">
				Most Popular
			</h2>
			<grid className="grid grid-rows-4 gap-y-4">
				<SmallArticle bg={"bg-red-300"} />
				<SmallArticle bg={"bg-blue-300"} />
				<SmallArticle bg={"bg-yellow-300"} />
				<SmallArticle bg={"bg-green-300"} />
			</grid>
		</div>
	);
};

export default MostPopular;
