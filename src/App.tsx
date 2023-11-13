import { Routes, Route } from "react-router-dom";

import { NewsList, ArticleDetails } from "./components";
import { AppContainer, Header, Slogan, PointLogo } from "./components/styles";

function App() {
    return (
        <AppContainer>
            <Header>
                <PointLogo />
                <Slogan>Думай и решай быстро</Slogan>
            </Header>
            <Routes>
                <Route path="/" element={<NewsList />} />
                <Route path=":url" element={<ArticleDetails />} />
            </Routes>
        </AppContainer>
    );
}

export default App;
