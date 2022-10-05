import React from "react";
import Link from "next/link";

const Article = ({ bg }) => {
	return (
		<div className="w-full bg-red-50 mb-5">
			{/*image here*/}
			<Link href="/">
				<a>
					<div className={`w-full lg:h-64 h-44 ${bg}`} />
				</a>
			</Link>
			<div className="shadow-lg w-full lg:p-6 p-3 bg-white">
				<Link href="/">
					<a className="hover:cursor-pointer text-black hover:text-red-500">
						<h3 className="lg:text-4xl md:text-3xl text-xl font-bold inline-block">
							Very Interesting and Long News heading
						</h3>
					</a>
				</Link>
				<div>
					<div className="flex space-x-2 my-3 items-center">
						{/*Avatar here*/}
						<div className="w-8 h-8 rounded-full bg-blue-300" />
						<p className="text-semibold sm:text-xl text-lg">
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
							<a className="w-48 flex items-center text-slate-400 hover:text-red-500 sm:text-xl text-lg">
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
