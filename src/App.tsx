import Navbar from "components/Navbar/Navbar";
import { About, Home, Store } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-6xl">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/store" element={<Store />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
