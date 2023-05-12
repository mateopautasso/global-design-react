import "./circulo.css";

function Circulo({ color, top, left, right, rotate }) {
    const estilos = {
        top: top,
        left: left,
        right: right,
        transform: `rotate(${rotate}deg)`
    }
    return(
        <div 
            className={color === 'negro' ? "circulo-decoration circulo-decoration--negro" : "circulo-decoration circulo-decoration--azul"}
            style={estilos}>
        </div>
    )   
}

export default Circulo;