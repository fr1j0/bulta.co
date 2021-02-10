import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Bulta.co</h1>
        </div>
    );
};

export default Home;
