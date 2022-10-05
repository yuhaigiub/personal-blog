import React from "react";
import Category from "../Category";

const categories = [
	{ name: "Art Street", num: "1", color: "yellow" },
	{ name: "Business", num: "2", color: "cyan" },
	{ name: "Culture", num: "14", color: "yellow" },
	{ name: "Design", num: "5", color: "blue" },
	{ name: "Lifestyle", num: "3", color: "red" },
	{ name: "World", num: "6", color: "orange" },
];

const CategoryList = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold mb-9">
				Category List
			</h2>
			<div className="flex flex-wrap gap-x-4 gap-y-4">
				{categories.map((category) => {
					return (
						<Category key={category.name} {...category} />
					);
				})}
			</div>
		</div>
	);
};

export default CategoryList;
