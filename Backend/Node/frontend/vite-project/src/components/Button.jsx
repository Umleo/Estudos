import { Link } from "react-router";


const RouteCriar = ({caminho, texto, style})=>{
    return (
        <Link to={caminho}>
            <button className={style}>
                {texto}
            </button>
        </Link>
    )
}

export default RouteCriar