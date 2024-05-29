import { useState } from "react"
import PropTypes from 'prop-types';

const FirstApp = ({ title, sum }) => {
    const [counter, setCounter] = useState( sum )

    const handleAdd = () => {
        setCounter( counter + 1)
    }
    const handleSubstract = () => {
        setCounter( counter - 1)
    }
    const handleReset = () => {
        setCounter( sum )
    }
    return (
        <>
        <h1> { title } </h1>
        <span> {counter} </span>
        <button onClick={ () => handleAdd() }> +1 </button>
        <button onClick={ () => handleSubstract() }> -1 </button>
        <button onClick={ () => handleReset() }> Reset </button>
        </>
    )
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    sum: 300
}
export default FirstApp