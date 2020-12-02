import Content from "./Content"

type PictureContainer = Content & {
	width: number,
	height: number,
	image: Image
}

export default PictureContainer