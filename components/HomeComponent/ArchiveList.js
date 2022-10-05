import React from "react";
import Archive from "../Archive";

const archives = [
	{ date: "July 2022", color: "red", num: 1 },
	{ date: "October 2021", color: "blue", num: 11 },
	{ date: "September 2021", color: "cyan", num: 2 },
	{ date: "August 2022", color: "red", num: 4 },
	{ date: "July 2021", color: "yellow", num: 6 },
	{ date: "February 2021", color: "cyan", num: 8 },
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
