import { StyledSearchBar, SubTitle } from "../styles";

const RangeBar = (props) => {
  return (
    <div>
      <SubTitle className="form-label" for="customRange1">
        Trip Length
      </SubTitle>
      <div className="range">
        <StyledSearchBar
          onChange={(event) => console.log(event.target.value)}
          type="range"
          className="form-range"
          id="customRange1"
        />
      </div>
    </div>
  );
};

export default RangeBar;
