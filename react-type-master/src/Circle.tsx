import styled from 'styled-components';

interface ContainerProp {
	bgColor: string;
}

const Container = styled.div<ContainerProp>`
	width: 200px;
	height: 200px;
	background-color: ${props => props.bgColor};
	border-radius: 100px;
`;
//Container에게 bgColor 인자를 주려면 div옆에 붙이면 된다.

interface CircleProp {
	bgColor: string;
}
// interface는 objcet가 어떻게 보일지 설명해주는 거다. 무슨 타입인지.

function Circle(props: CircleProp) {
	return <Container bgColor={props.bgColor}></Container>;
}
//Circle은 값으로 props를 선택했고, 타입으로는 CirCleProp를 선택했다.
//Circle 컴포넌트를 쓰면 하위 컴포넌트 Container의 태그 bgColor에 props.bgColor에 props 값이 들어간다.
//실제로 토마토색이 props.bgColor에 들어간 것이다. 그러면
//Container 안에서는 styled.div<ConainerProp>로  ContainerProp의 타입으로는 bgColor는 string이라고 선언 후
//background-color에 토마토 값이 들어가서 나오는 것.

export default Circle;

interface PlayerShape {
	name: string;
	age: number;
}

const Hello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
