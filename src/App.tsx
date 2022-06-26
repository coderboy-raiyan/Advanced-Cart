import { About, Home, Store } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store />} />
            </Routes>
        </div>
    );
}

export default App;
