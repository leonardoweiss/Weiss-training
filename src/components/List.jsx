function List({ exercises }) {
    return(
        <section>
            {exercises.map(ex => (
                <div id="exercise">
                    <div id="mark">
                        <input type="checkbox" name="check" id="check"/>
                    </div>
                    <a href={ex.link}>
                        <div className="box">
                            <h3>
                                {ex.name}
                            </h3>
                            <div className="infos">
                                <div>Séries: <strong>{ex.series}</strong></div>
                                <div>Repetições: <strong>{ex.reps}</strong></div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </section>
    )
}

export default List