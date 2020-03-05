import React from "react";

import Result from "./Result";

const SearchResults = ({ results }) => {
  if (results === []) {
    return <></>;
  } else if (results[0] === "None found") {
    return <div>No Results Found!</div>;
  }
  return (
    <table>
      <tbody className="search-results">
        {results.map(result => {
          return <Result result={result} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
