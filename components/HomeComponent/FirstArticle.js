import React from "react";
import Link from "next/link";
import Image from "next/future/image";

const FirstArticle = ({ img, title, id }) => {
	const postLink = `/posts/${id}`;

	return (
		<div className="w-full bg-white mb-5 pb-20 relative overflow-hidden transition-all duration-1000 disabled:opacity-0">
			{/*image here*/}
			<Link href={postLink}>
				<a>
					<div
						className={`w-full xl:w-[70rem] h-44 xl:h-[32rem] bg-red-500 z-0 relative xl:left-64 shadow-2xl`}>
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
			<div className="shadow-xl w-full p-3 lg:p-6 bg-white xl:w-[40rem] xl:absolute xl:bottom-10 xl:left-10">
				<Link href={postLink}>
					<a className="hover:cursor-pointer text-black hover:text-red-500">
						<h3 className="lg:text-4xl text-xl md:text-3xl xl:text-5xl font-bold inline-block">
							{title}
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
						<Link href={postLink}>
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

export default FirstArticle;
