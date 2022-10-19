import React from "react";
import Archive from "./Archive";

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

const ArchiveList = ({ archives }) => {
	return (
		<div>
			<h2 className="text-3xl font-semibold mb-9">Archive List</h2>
			<div className="flex flex-col gap-y-2">
				{archives.map((archive) => {
					const index = Math.floor(Math.random() * colors.length);
					return (
						<Archive
							key={new Date(archive[0], archive[1]).toDateString()}
							archive={archive}
							bgColor={colors[index].bgColor}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ArchiveList;
