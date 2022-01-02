import './../App.css';
import styled from 'styled-components/macro'
import { Todos } from './Todos';

// add <Todos/>
function App() {
  return (
    <Wrapper>
      <Todos/>
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`

`;