import Content from "./Content"
import Border from "./components/Border";

type Shape = Content & {
	border: Border,
	background: string,
}

export default Shape
