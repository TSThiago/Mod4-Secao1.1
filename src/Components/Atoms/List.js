function List({array}) {
    return (
        <>
            <h3>Resultados</h3>
            {
                array.map((result, index) => (
                    <li key={index}>{result}</li>
                ))
            }
        </>
    )
}

export default List;