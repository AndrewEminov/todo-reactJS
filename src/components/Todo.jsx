import React, { Component } from 'react';
import styled from 'styled-components/macro'
import { ACTIONS_TODO } from '../appRelated/constants';
import { TodoPriority } from '../components/TodoPriority';

export class Todo extends Component {
    
    constructor(props) {
        super(props);
    }

    handlerTodoAction = (id, status) => {
        const { updateTodos } = this.props;
        updateTodos(status, id);
    }

    handlerTodoPriority = ({target: {value}}, id) => {
        const { updateTodos } = this.props;
        updateTodos({value, isPriority: true}, id);
    }

    render(){
        const { name, id, isAprove, priority, handlerSetPriority,  } = this.props;

        return(
            <Wrapper isAprove={isAprove}>
                <Name priority={priority}>{name}</Name>
                <Aprove onClick = {() => this.handlerTodoAction(id, ACTIONS_TODO.aprove)}>V</Aprove>
                <Decline onClick = {() => this.handlerTodoAction(id, ACTIONS_TODO.decline)}>X</Decline>
                <TodoPriority currentPriority={priority} handlerChange={(e) => this.handlerTodoPriority(e, id)}/>
            </Wrapper>
        )
    }
}


const Wrapper = styled.div`
    text-decoration: ${(p) => p.isAprove && 'line-through'};
`;

const Name = styled.span`
    background: ${(p) => p.priority.color};
`;

const Aprove = styled.button``;

const Decline = styled.button``;