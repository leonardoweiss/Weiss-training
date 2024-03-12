function List({ exercises }) {
    return(
        <section>
            {exercises.map(ex => (
                <a href={ex.link}>
                    <div className="box">
                        <h3>
                            {ex.name}
                        </h3>
                        <div className="infos">
                            <div>Séries: <strong>{ex.series}</strong></div>
                            <div>Repetições: <strong>8 a 12</strong></div>
                        </div>
                    </div>
                </a>
            ))}
        </section>
    )
}

export default List