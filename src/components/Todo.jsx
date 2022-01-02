import React, { Component } from 'react';
import styled from 'styled-components/macro'
import { ACTIONS_TODO } from '../appRelated/constants';

export class Todo extends Component {
    
    constructor(props) {
        super(props);
    }

    handlerTodoAction = (id, status) => {
        const { updateTodos } = this.props;
        updateTodos(status, id);
    }

    render(){
        const { name, id, isAprove } = this.props;

        return(
            <Wrapper isAprove={isAprove}>
                <Name>{name}</Name>
                <Aprove onClick = {() => this.handlerTodoAction(id, ACTIONS_TODO.aprove)}>V</Aprove>
                <Decline onClick = {() => this.handlerTodoAction(id, ACTIONS_TODO.decline)}>X</Decline>
            </Wrapper>
        )
    }
}


const Wrapper = styled.div`
    text-decoration: ${(p) => p.isAprove && 'line-through'}
`;

const Name = styled.span``;

const Aprove = styled.button``;

const Decline = styled.button``;