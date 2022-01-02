import React from 'react';
import styled from 'styled-components/macro';


// memo
export function InputBar({handlerCreateNewTodo, handlerInputBar, todoName}) {

    return(
        <Wrapper>
            <Input placeholder={'input todo'} value={todoName} onChange={handlerInputBar}/>
            <Btn onClick={handlerCreateNewTodo}>Click</Btn>
        </Wrapper>
    )
    
}


const Wrapper = styled.div`
`;

const Input = styled.input`

`;

const Btn = styled.button`

`;
