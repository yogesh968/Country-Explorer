import CountryCard from "./CountryCard";

function CountryList({ countries, onSelect }) {
  return (
    <div className="grid">
      {countries.map((country) => (
        <CountryCard
          key={country.name.common}
          country={country}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default CountryList;