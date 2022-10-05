import React from "react";
import Link from "next/link";

const Category = ({ name, num, color }) => {
	return (
		<div className="flex gap-x-2 items-center text-lg">
			<Link href="/">
				<div
					className={`
                    bg-${color}-400 
                    flex items-center 
                    text-white font-semibold 
                    border-solid border-4 p-1 + border-${color}-400
					hover:cursor-pointer
					`}>
					{name}
				</div>
			</Link>
			<div
				className={`border-solid border-4 border-${color}-400 
                flex items-center justify-center w-11 h-11 text-black font-semibold`}>
				{num}
			</div>
		</div>
	);
};

export default Category;
