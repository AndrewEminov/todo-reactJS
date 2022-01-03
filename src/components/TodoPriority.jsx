import React from 'react';
import styled from 'styled-components/macro';

import { PRIORITY_TODO } from '../appRelated/constants'

export function TodoPriority({currentPriority, handlerChange}) {
   
    //console.log(currentPriority);
    return(
        <Wrapper onChange={handlerChange}>
            {PRIORITY_TODO.map((priority) =>
                <Option
                    key={priority.value}
                    value={priority.value}

                    // value={currentPriority?.value || priority.value}

                >
                    {priority.label}
                </Option>
            )}
            
        </Wrapper>
    )
    
}

const Wrapper = styled.select``;
const Option = styled.option``;
