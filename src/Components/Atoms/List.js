function List({props}) {
    return (
        <>
            <h3>Resultados</h3>
            {
                props.map((result, index) => (
                    <li key={index}>{result}</li>
                ))
            }
        </>
    )
}

export default List;