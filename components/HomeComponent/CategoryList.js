import React from "react";
import Category from "../Category";

const categories = [
	{
		name: "Art Street",
		num: "1",
		bgColor: "bg-yellow-500",
		borderColor: "border-yellow-500",
	},
	{
		name: "Business",
		num: "2",
		bgColor: "bg-cyan-500",
		borderColor: "border-cyan-500",
	},
	{
		name: "Culture",
		num: "14",
		bgColor: "bg-yellow-500",
		borderColor: "border-yellow-500",
	},
	{
		name: "Design",
		num: "5",
		bgColor: "bg-blue-500",
		borderColor: "border-blue-500",
	},
	{
		name: "Lifestyle",
		num: "3",
		bgColor: "bg-red-500",
		borderColor: "border-red-500",
	},
	{
		name: "World",
		num: "6",
		bgColor: "bg-orange-500",
		borderColor: "border-orange-500",
	},
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
