import React from "react";
import Link from "next/link";
import Image from "next/future/image";

const Article = ({ img, title, id, date }) => {
	const postLink = `/posts/${id}`;
	return (
		<div className="w-full bg-red-50 mb-5">
			{/*image here*/}
			<Link href={postLink}>
				<a>
					<div className={`w-full lg:h-64 h-44 bg-red-500`}>
						<Image
							src={img}
							alt="cannot load"
							width={100}
							height={100}
							style={{ width: "100%", height: "100%" }}
						/>
					</div>
				</a>
			</Link>
			<div className="shadow-2xl w-full lg:p-6 p-3 bg-white">
				<Link href={postLink}>
					<a className="hover:cursor-pointer text-black hover:text-red-500">
						<h3 className="lg:text-3xl md:text-2xl text-xl font-bold inline-block lg:h-36 xl:h-28 overflow-hidden">
							{title}
						</h3>
					</a>
				</Link>
				<div>
					<div className="flex space-x-2 my-3 items-center">
						{/*Avatar here*/}
						<div className="w-8 h-8 rounded-full bg-blue-300" />
						<p className="text-semibold sm:text-xl text-lg">Yuhaigiub</p>
						<p className="text-slate-500">{new Date(date).toDateString()}</p>
					</div>
					<content className="text-slate-500">
						In the business environment where competitive pressure continues to
						rise, organizations are looking toward IIoT as a solution to
						revolutionize the end.
					</content>
					<div>
						<Link href="/">
							<a className="w-48 flex items-center text-slate-400 hover:text-red-500 sm:text-xl text-lg">
								Continue Reading <span className="text-4xl">→</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;
