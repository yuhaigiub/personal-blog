import React from "react";
import Link from "next/link";

const Archive = ({ color, date, num }) => {
	return (
		<div className="flex justify-between">
			<Link href="/">
				<p className="text-lg hover:text-red-500 hover:cursor-pointer">
					{date}
				</p>
			</Link>
			<div
				className={`bg-${color}-500 text-lg w-12 h-12 text-white text-bold flex items-center justify-center`}>
				{num}
			</div>
		</div>
	);
};

export default Archive;
