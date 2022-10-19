import React from "react";
import { useMemo } from "react";
import Link from "next/link";

const Category = ({ name, number, bgColor, borderColor }) => {
	const containerClass = useMemo(() => {
		return `flex w-full lg:w-auto ${bgColor} justify-between lg:justify-start lg:bg-inherit sm:gap-x-2 sm:items-center text-lg shadow-2xl`;
	}, [bgColor]);

	const TextClass = useMemo(() => {
		return `${bgColor} ${borderColor} flex items-center text-white font-semibold border-solid border-4 p-1 hover:cursor-pointer`;
	}, [bgColor, borderColor]);

	const numberClass = useMemo(() => {
		return `${borderColor} border-solid border-4 flex items-center justify-center w-11 h-11 text-black font-semibold`;
	}, [borderColor]);

	return (
		<div className={containerClass}>
			<Link href="/">
				<div className={TextClass}>{name}</div>
			</Link>
			<div className={numberClass}>{number}</div>
		</div>
	);
};

export default Category;
