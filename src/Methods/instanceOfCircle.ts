function instanceOfCircle(object: any): object is Circle {
	return 'radius' in object;
}
