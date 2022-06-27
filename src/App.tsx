import Navbar from "components/Navbar/Navbar";
import { About, Store } from "pages";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <main className="mx-auto max-w-7xl">
                <Routes>
                    <Route path="/" element={<Store />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Store />} />
                </Routes>
            </main>
            <Toaster />
        </div>
    );
}

export default App;
