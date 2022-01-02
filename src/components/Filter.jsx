import React from 'react';
import styled from 'styled-components/macro';

export function Filter ({ status, title, filterTodos }) {

    const handlerFilter = () => {
        filterTodos(status)
    }

    return(
        <Wrapper onClick={handlerFilter}>{title}</Wrapper>
    )
    
}

const Wrapper = styled.div`

`;