import fs from "fs";
import path from "path";

const fileLocation = "public/home_data.json";

export function getPostData() {
	const filePath = path.join(process.cwd(), fileLocation);
	const textData = fs.readFileSync(filePath, "utf8");

	return JSON.parse(textData);
}
