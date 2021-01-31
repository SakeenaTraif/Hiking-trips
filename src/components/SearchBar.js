import { StyledSearchBar } from "../styles";

const SearchBar = (props) => {
  return (
    <StyledSearchBar
      onChange={(event) => props.setDiff(event.target.value.toLowerCase())}
    />
  );
};

export default SearchBar;
