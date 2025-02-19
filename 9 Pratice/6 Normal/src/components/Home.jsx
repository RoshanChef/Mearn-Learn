import { useContext } from "react";
import { AppContext } from "./Main";

function Home() {
    const { val } = useContext(AppContext);
    console.log('value ', val);

    return <div>
        Home
    </div>
}

export default Home;