import React from "react";
import Layout from "../../components/Layout";
import { getPostData } from "../../lib/utils";
import Image from "next/future/image";

export default function Post({ post }) {
	return (
		<Layout>
			<h2 className="text-5xl font-bold my-6">
				{post.title}
			</h2>
			<div className="w-full h-96 my-5">
				<Image
					src={post.img}
					alt="cannot load"
					width={100}
					height={100}
					className="w-full h-full"
				/>
			</div>
			<div>
				<div className="flex flex-col space-y-5 indent-10 text-justify">
					<p>
						Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. At ad nesciunt ipsa voluptas.
						Provident eveniet ipsam possimus temporibus
						assumenda natus iusto numquam deleniti sed
						reiciendis, quas vero. Sunt doloremque, magni
						necessitatibus saepe provident, id unde adipisci
						illum quaerat soluta explicabo dolorum totam
						sapiente quisquam possimus maiores, voluptatibus
						nobis labore. Odio, repudiandae? Aut fugiat qui
						minus libero ipsam, porro sint, ex velit
						similique nostrum quidem vel itaque fugit
						expedita est consequatur! Molestiae dicta nisi
						totam ullam non et, voluptas inventore
						voluptatibus quam quo itaque.
					</p>
					<p className="text-lg font-bold">
						Lorem, ipsum dolor sit amet consectetur
						adipisicing elit.
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur
						adipisicing elit. Aliquid ad blanditiis ullam,
						aliquam, quisquam vitae eum voluptates incidunt
						expedita dolor facilis repudiandae velit
						accusantium nisi magnam suscipit perferendis
						sint similique:
					</p>
					<ul className="list-disc pl-16">
						<li>Item one</li>
						<li>Item two</li>
						<li>Item three</li>
						<li>Item four</li>
					</ul>
					<p>
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Sint rerum iste deserunt
						molestias minus aliquid nam, corporis soluta ab
						quibusdam unde ipsa impedit repellendus a
						voluptatum deleniti consequatur, aperiam esse
						iusto illum! Nostrum quia a ab? Ad, quia. Modi
						eveniet consequuntur quibusdam ex impedit sint,
						dolore ut fugit laudantium dolores tempore? Esse
						placeat quia, eos in hic ullam! Rerum quos
						veniam atque aspernatur modi magnam adipisci
						excepturi iste cumque saepe? Enim pariatur
						blanditiis quibusdam earum, quos unde veniam
						nesciunt quidem voluptate facilis, quia illum
						dolorem ipsa eaque, ut labore maiores
						voluptates. Similique eius nulla soluta
						perferendis quisquam? Sunt maiores impedit ut ex
						laboriosam blanditiis atque eum eos natus alias
						consequatur amet rerum, ullam officia quia
						obcaecati aut repellendus quisquam, in unde!
						Veniam quisquam iusto pariatur.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Sint rerum iste deserunt
						molestias minus aliquid nam, corporis soluta ab
						quibusdam unde ipsa impedit repellendus a
						voluptatum deleniti consequatur, aperiam esse
						iusto illum! Nostrum quia a ab? Ad, quia. Modi
						eveniet consequuntur quibusdam ex impedit sint,
						dolore ut fugit laudantium dolores tempore? Esse
						placeat quia, eos in hic ullam! Rerum quos
						veniam atque aspernatur modi magnam adipisci
						excepturi iste cumque saepe? Enim pariatur
						blanditiis quibusdam earum, quos unde veniam
						nesciunt quidem voluptate facilis, quia illum
						dolorem ipsa eaque, ut labore maiores
						voluptates. Similique eius nulla soluta
						perferendis quisquam? Sunt maiores impedit ut ex
						laboriosam blanditiis atque eum eos natus alias
						consequatur amet rerum, ullam officia quia
						obcaecati aut repellendus quisquam, in unde!
						Veniam quisquam iusto pariatur.{" "}
						<strong>
							Lorem ipsum, dolor sit amet consectetur
							adipisicing elit.
						</strong>{" "}
						Sint rerum iste deserunt molestias minus aliquid
						nam, corporis soluta ab quibusdam unde ipsa
						impedit repellendus a voluptatum deleniti
						consequatur, aperiam esse iusto illum! Nostrum
						quia a ab? Ad, quia. Modi eveniet consequuntur
						quibusdam ex impedit sint, dolore ut fugit
						laudantium dolores tempore? Esse placeat quia,
						eos in hic ullam! Rerum quos veniam atque
						aspernatur modi magnam adipisci excepturi iste
						cumque saepe? Enim pariatur blanditiis quibusdam
						earum, quos unde veniam nesciunt quidem
						voluptate facilis, quia illum dolorem ipsa
						eaque, ut labore maiores voluptates. Similique
						eius nulla soluta perferendis quisquam? Sunt
						maiores impedit ut ex laboriosam blanditiis
						atque eum eos natus alias consequatur amet
						rerum, ullam officia quia obcaecati aut
						repellendus quisquam, in unde! Veniam quisquam
						iusto pariatur.
					</p>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const posts = getPostData();
	const paths = posts.map((post) => {
		return {
			params: {
				id: post.id,
				title: post.title,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const dataMetadata = getPostData();
	const post = dataMetadata.find(
		(post) => post.id === params.id
	);
	return {
		props: {
			post,
		},
	};
}
