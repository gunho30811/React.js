import styled from 'styled-components';

interface ContainerProp {
	bgColor: string;
	borderColor: string;
}
//여기서는 ?를 붙이지 않았기 때문에 bgColor나 borderColor 나 반드시 있어야하는 required 상태이다.
const Container = styled.div<ContainerProp>`
	width: 200px;
	height: 200px;
	background-color: ${props => props.bgColor};
	border-radius: 100px;
	border: 2px solid ${props => props.borderColor};
`;
//Container에게 bgColor 인자를 주려면 div옆에 붙이면 된다.

interface CircleProp {
	bgColor: string;
	borderColor?: string;
	text?: string;
}
// interface는 objcet가 어떻게 보일지 설명해주는 거다. 무슨 타입인지.
//borderColor 는 undefined가 될 수도 있다고 ?를 통해 선언해주었다.

function Circle(props: CircleProp) {
	return (
		<Container
			bgColor={props.bgColor}
			borderColor={props.borderColor ?? props.bgColor}>
			{props.text}
		</Container>
	);
}
//Circle은 값으로 props를 선택했고, 타입으로는 CirCleProp를 선택했다.
//Circle 컴포넌트를 쓰면 하위 컴포넌트 Container의 태그 bgColor에 props.bgColor에 props 값이 들어간다.
//실제로 토마토색이 props.bgColor에 들어간 것이다. 그러면
//Container 안에서는 styled.div<ConainerProp>로  ContainerProp의 타입으로는 bgColor는 string이라고 선언 후
//background-color에 토마토 값이 들어가서 나오는 것.
//borderColor={props.borderColor ?? props.bgColor}의 의미는 undefined가 아니면 props.borderColor 태그에 선언된 값을 가져오고
//아니라면 그냥 props.bgColor의 값을 props.borderColor에 넣겠다는 의미이다.
export default Circle;

// interface PlayerShape {
// 	name: string;
// 	age: number;
// }

// const Hello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
