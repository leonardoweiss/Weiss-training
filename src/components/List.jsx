function List({ exercises }) {
    return(
        <section id="list">
            {exercises.map(ex => (
                <div id="exercise">
                    <div>
                        <label class="container">
                            <input type="checkbox"/>
                            <div class="checkmark"></div>
                        </label>
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