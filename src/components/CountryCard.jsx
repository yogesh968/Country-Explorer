function CountryCard({ country, onSelect }) {
  return (
    <div onClick={() => onSelect(country)}>
      <img src={country.flags.png} alt={country.name.common} />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0] || "N/A"}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </div>
  );
}

export default CountryCard;