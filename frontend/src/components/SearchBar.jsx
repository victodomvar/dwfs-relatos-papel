function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label className="field search-field">
        <span>Buscar por titulo</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Ejemplo: La biblioteca sumergida"
        />
      </label>
    </div>
  )
}

export default SearchBar
