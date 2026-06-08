function CountryDetail({ country }) {
  if (!country) return null;

  return (
    <div>
      <img src={country.flags.svg} alt={country.name.common} />
      <h2>{country.name.official}</h2>
      <p>Population: {country.population}</p>
      <p>Area: {country.area}</p>
      <p>
        Languages:{" "}
        {country.languages
          ? Object.values(country.languages).join(", ")
          : "N/A"}
      </p>
      <p>
        Currencies:{" "}
        {country.currencies
          ? Object.values(country.currencies)
              .map((c) => c.name)
              .join(", ")
          : "N/A"}
      </p>
    </div>
  );
}

export default CountryDetail;