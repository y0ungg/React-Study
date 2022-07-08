import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import MainPage from "./components/page/MainPage";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";

const Nav = styled.nav`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
`

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: black;
//     width: 20%;
//     text-align: center;
//     padding: 5%;
//     font-size: 2rem;

//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `;

function App() {
  return (
    <div className="App">
      <h2>미니 블로그</h2>
      <Routes>
        <Route path='/write' element={<PostWritePage />} />
        <Route index element={<MainPage />} />
        <Route path='/post/:postId' element={<PostViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
