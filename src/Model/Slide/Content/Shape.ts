import Content from "./Content"
import Border from "./Components/Border";

type Shape = Content & {
	border: Border,
	background: string,
}

export default Shape
