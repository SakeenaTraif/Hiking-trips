import { StyledSearchBar,SubTitle } from "../styles";

const RangeBar = (props) => {
  return (
    
<div>
<SubTitle className="form-label" for="customRange1" onChang={(event) => props.setRange(event.target.value)}>Trip Length
</SubTitle>
<div className="range">
  <StyledSearchBar type="range" className="form-range" id="customRange1" />
</div>
</div>
  );
};

export default RangeBar;