import React from "react";
import Link from "next/link";

const Category = ({ name, num, bgColor, borderColor }) => {
	return (
		<div className="flex gap-x-2 items-center text-lg">
			<Link href="/">
				<div
					className={`
					${bgColor}
					${borderColor}
                    flex items-center 
                    text-white font-semibold 
                    border-solid border-4 p-1 
					hover:cursor-pointer
					`}>
					{name}
				</div>
			</Link>
			<div
				className={`${borderColor} border-solid border-4 flex items-center justify-center w-11 h-11 text-black font-semibold`}>
				{num}
			</div>
		</div>
	);
};

export default Category;
