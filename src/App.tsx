import "./styles/theme.css";
import "./styles/global.css";
import {Heading} from "./components/Heading.tsx";

export function App() {
    return (
        <>
            <Heading/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
                repudiandae, voluptates facere dolorem autem similique tenetur repellat
                voluptas quaerat nam eaque, dolor et nisi eligendi voluptatem earum
                delectus sunt sed!
            </p>
        </>
    );
}

// export {App}; //export nomeado.
// export default App // pode ser importado com qualquer outro nome.
