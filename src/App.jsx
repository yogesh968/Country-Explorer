import { useState, useMemo } from "react";
import useCountries from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  const { countries, loading, error } = useCountries();

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = useMemo(() => {
    return countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRegion =
        region === "All" || country.region === region;

      return matchesSearch && matchesRegion;
    });
  }, [countries, search, region]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Countries Explorer </h1>

      <SearchBar search={search} setSearch={setSearch} />
      <RegionFilter region={region} setRegion={setRegion} />

      {filteredCountries.length === 0 ? (
        <p>No countries found</p>
      ) : (
        <CountryList
          countries={filteredCountries}
          onSelect={setSelectedCountry}
        />
      )}

      <CountryDetail country={selectedCountry} />
    </div>
  );
}

export default App;