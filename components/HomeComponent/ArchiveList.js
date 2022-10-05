import React from "react";
import Archive from "./Archive";

const archives = [
	{ date: "July 2022", bgColor: "bg-red-500", num: 1 },
	{ date: "October 2021", bgColor: "bg-blue-500", num: 11 },
	{
		date: "September 2021",
		bgColor: "bg-cyan-500",
		num: 2,
	},
	{ date: "August 2022", bgColor: "bg-red-500", num: 4 },
	{ date: "July 2021", bgColor: "bg-yellow-500", num: 6 },
	{ date: "February 2021", bgColor: "bg-cyan-500", num: 8 },
];

const ArchiveList = () => {
	return (
		<div>
			<h2 className="text-3xl font-semibold mb-9">
				Archive List
			</h2>
			<div className="flex flex-col gap-y-2">
				{archives.map((archive) => {
					return (
						<Archive key={archive.date} {...archive} />
					);
				})}
			</div>
		</div>
	);
};

export default ArchiveList;
