import React from "react";
import Category from "./Category";

const colors = [
	{
		bgColor: "bg-red-500",
		borderColor: "border-red-500",
	},
	{
		bgColor: "bg-green-500",
		borderColor: "border-green-500",
	},
	{
		bgColor: "bg-yellow-500",
		borderColor: "border-yellow-500",
	},
	{
		bgColor: "bg-orange-500",
		borderColor: "border-orange-500",
	},
	{
		bgColor: "bg-cyan-500",
		borderColor: "border-cyan-500",
	},
	{
		bgColor: "bg-pink-500",
		borderColor: "border-pink-500",
	},
];

const CategoryList = ({ categories }) => {
	return (
		<div>
			<h2 className="text-3xl font-semibold sm:mb-9 mb-3">Category List</h2>
			<div className="flex flex-wrap sm:gap-x-4 gap-y-2 sm:gap-y-4">
				{categories.map((category) => {
					console.log(category);
					const index = Math.floor(Math.random() * colors.length);
					const { bgColor, borderColor } = colors[index];
					const [name, number] = Object.entries(category)[0];
					return (
						<Category
							key={name}
							bgColor={bgColor}
							borderColor={borderColor}
							name={name}
							number={number}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryList;
