import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Todo } from '../components/Todo';
import { InputBar } from '../components/InputBar';
import { ACTIONS_TODO } from '../appRelated/constants';
import { Filter } from '../components/Filter';

export class Todos extends Component {
    state = { 
        todos: [], 
        todoName: '', 
        allTodoList: [], 
        status: ACTIONS_TODO.all
    };

    filterTodos = (status, todoList) => {
        const { allTodoList } = this.state;

        let list = todoList || allTodoList;

        if(status === ACTIONS_TODO.aprove) list = list.filter((todo) => todo.isAprove && todo );
        if(status === ACTIONS_TODO.decline) list = list.filter((todo) => !todo.isAprove && todo );
        if(status === ACTIONS_TODO.all) list = list;

        
        this.setState({
            todos: list,
            allTodoList: todoList || allTodoList,
            status
        });
        
    }

    updateTodos = (action, currentTodoId) => {
        let list = [];
        const { todos, allTodoList, status } = this.state;
        
        if(action === ACTIONS_TODO.aprove){
            list = allTodoList.map((todo) => currentTodoId === todo.id ? {...todo, isAprove: !todo.isAprove} : todo);

            this.filterTodos(status, list);
        }

        if(action === ACTIONS_TODO.decline){
            list = allTodoList.filter((todo) => currentTodoId !== todo.id && todo )

            this.filterTodos(status, list);
        }
    }

    handlerCreateNewTodo = () => {
        const { todoName, allTodoList, todos, status } = this.state;
        const existedTodo = allTodoList.find(todo => todo.name === todoName);

        if(existedTodo){
            alert('The todo is already exist')
            return;
        }

        if(todoName){
            const newTodo = {
                name: todoName, 
                id: Math.random(), 
                isAprove: false
            }
        
            this.filterTodos(status, [...allTodoList, newTodo]);
        }        
    }

    handlerInputBar = ({target: { value }}) => {
        this.setState({todoName: value})
    }


    render(){
        const { todos, todoName } = this.state;

        return(
            <Wrapper>
                <Filters>
                    <Filter title={'All'} status={ACTIONS_TODO.all} filterTodos={this.filterTodos} />
                    <Filter title={'Completed'} status={ACTIONS_TODO.aprove} filterTodos={this.filterTodos} />
                    <Filter title={'Active'} status={ACTIONS_TODO.decline} filterTodos={this.filterTodos} />
                </Filters>

                <InputBar
                    handlerCreateNewTodo={this.handlerCreateNewTodo}
                    handlerInputBar={this.handlerInputBar}
                    todoName={todoName}
                />
                {todos.map((todo) => 
                    <Todo 
                        updateTodos={this.updateTodos} 
                        key={todo.id} 
                        name={todo.name} 
                        id={todo.id} 
                        isAprove={todo.isAprove} 
                    />
                )}
            </Wrapper>
        );
    }    
}

const Wrapper = styled.div`
    text-decoration: ${(p) => p.isAprove && 'line-through'}
`;

const Filters = styled.div`
    display: flex;
    justify-content: space-around;
    width: 210px;
`;
