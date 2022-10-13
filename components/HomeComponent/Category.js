import React from "react";
import Link from "next/link";

const Category = ({ name, number, bgColor, borderColor }) => {
	return (
		<div
			className={`flex w-full lg:w-auto ${bgColor} justify-between lg:justify-start lg:bg-inherit sm:gap-x-2 sm:items-center text-lg shadow-2xl`}>
			<Link href="/">
				<div
					className={`
						${bgColor}
						${borderColor}		
						flex items-center text-white font-semibold 
						border-solid border-4 p-1 
						hover:cursor-pointer`}>
					{name}
				</div>
			</Link>
			<div
				className={`
					${borderColor} 
					border-solid border-4 flex items-center justify-center w-11 h-11 text-black font-semibold`}>
				{number}
			</div>
		</div>
	);
};

export default Category;
