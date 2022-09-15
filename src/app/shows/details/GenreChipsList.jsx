const GenreChipsList = ({ genres = [] }) => (
    <>
        {genres.map((genre, index) => (
            <div className="card chip" key={index}>
                {genre}
            </div>
        ))}
    </>
)

export default GenreChipsList
