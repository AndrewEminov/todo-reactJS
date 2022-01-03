import React from 'react';
import styled from 'styled-components/macro';
import { TodoPriority } from '../components/TodoPriority';

// memo
export function InputBar({handlerCreateNewTodo, handlerInputBar, todoName, handlerSetPriority}) {

    return(
        <Wrapper>
            <Input placeholder={'input todo'} value={todoName} onChange={handlerInputBar}/>
            <TodoPriority handlerChange={handlerSetPriority}/>
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
