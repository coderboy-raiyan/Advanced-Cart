import Navbar from "components/Navbar/Navbar";
import { About, Home, Store } from "pages";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <main className="mx-auto max-w-7xl">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Store />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
