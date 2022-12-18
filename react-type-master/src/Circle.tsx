import styled from 'styled-components';
import React, { useState } from 'react';
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
	bgColo: string;
	borderColor?: string;
	text?: string;
}
// interface는 objcet가 어떻게 보일지 설명해주는 거다. 무슨 타입인지.
//borderColor 는 undefined가 될 수도 있다고 ?를 통해 선언해주었다.

function Circle(props: CircleProp) {
	const [counter, setcounter] = useState<number | string>(0);
	setcounter(2);
	setcounter('hi');
	//setCounter로 숫자값을 넣어서 호출하면
	//Counter 값이 바뀔거고, 우리의 component도 새로 렌더링 된다
	//만약 State 값에 type을 2개이상 넣고 싶다면 Generics안에 타입을 지정
	return (
		<Container
			bgColor={props.bgColo}
			borderColor={props.borderColor ?? props.bgColo}>
			{props.text}
		</Container>
	);
}
//Circle은 값으로 props를 선택했고, 타입으로는 CirCleProp를 선택했다.
//Circle 컴포넌트를 쓰면 하위 컴포넌트 Container의 태그 bgColor에 props.bgColo값이 bgColor로 값이 들어간다.
//그러면 Container의 bgColor태그가 ContainerProp의 bgColor랑 같기에 ContainerProp가 연결 된
//실제로 Circle 컴포넌트에 bgColor='tomato' 토마토색이 props.bgColor에 들어간 것이다. 그러면 Container 스타일 변수에 이 pros.bgColor값이 들어간 것
//따라서 토마토라는 값을 받았으니, 그 값을 background-color에 넣었으니, 토마토색이 되는 것이다.

//borderColor={props.borderColor ?? props.bgColor}의 의미는 undefined가 아니면 props.borderColor 태그에 선언된 값을 가져오고
//아니라면 그냥 props.bgColor의 값을 props.borderColor에 넣겠다는 의미이다.
export default Circle;

// interface PlayerShape {
// 	name: string;
// 	age: number;
// }

// const Hello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
