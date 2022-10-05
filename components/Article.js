import React from "react";
import Link from "next/link";

const Article = ({ bg }) => {
	return (
		<div className="w-full bg-red-50 mb-5">
			{/*image here*/}
			<Link href="/">
				<a className="">
					<div className={`w-full h-64 ${bg}`} />
				</a>
			</Link>
			<div className="shadow-lg w-full p-6 bg-white">
				<Link href="/">
					<a className="hover:cursor-pointer text-black hover:text-red-500">
						<h3 className="text-4xl font-bold inline-block">
							Very Interesting and Long News heading
						</h3>
					</a>
				</Link>
				<div>
					<div className="flex space-x-2 my-3 items-center">
						<div className="w-8 h-8 rounded-full bg-blue-300"></div>
						<p className="text-semibold text-xl">
							Yuhaigiub
						</p>
						<p className="text-slate-500">July 17,2022</p>
					</div>
					<content className="text-slate-500">
						In the business environment where competitive
						pressure continues to rise, organizations are
						looking toward IIoT as a solution to
						revolutionize the end.
					</content>
					<div>
						<Link href="/">
							<a className="w-48 flex items-center text-slate-400 hover:text-red-500 text-xl">
								Continue Reading{" "}
								<span className="text-4xl">→</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
