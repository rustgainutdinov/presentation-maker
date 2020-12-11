import TextContainer from '../../Model/Slide/Content/TextContainer'

function instanceOfTextContainer(object: any): object is TextContainer {
	return 'richText' in object;
}

export default instanceOfTextContainer;