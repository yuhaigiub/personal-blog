import React from "react";
import SmallArticle from "./SmallArticle";

const MostPopular = ({ posts }) => {
	return (
		<div>
			<h2 className="text-3xl font-semibold mb-6 lg:mb-9">
				Most Popular
			</h2>
			<grid className="grid grid-rows-4 gap-y-6">
				{posts.map((post) => {
					return <SmallArticle key={post.id} {...post} />
				})}
			</grid>
		</div>
	);
};

export default MostPopular;
