import Content from "./content/Content"

type Slide = {
	slideId: number,
	background: string,
	animation: number,
	contentList: {
		[key: string]: Content
	}
}

export default Slide
