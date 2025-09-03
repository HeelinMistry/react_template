import { useEffect, useState } from "react";
import Tabs from "./components/Tabs";

function App() {
    const [cv, setCv] = useState(null);

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/cv.json")
            .then((res) => res.json())
            .then(setCv)
            .catch((err) => console.error("Error loading CV:", err));
    }, []);

    if (!cv) return <p>Loading...</p>;

    return (
        <div>
            <Tabs cv={cv} />
        </div>
    );
}

export default App;
