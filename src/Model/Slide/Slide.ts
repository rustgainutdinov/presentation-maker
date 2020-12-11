import Content from "./Content/Content"

type Slide = {
	background: string,
	animation: number,
	contentList: {
		[key: string]: Content
	}
}

export default Slide