import { StyledSearchBar } from "../styles";

const RangeBar = (props) => {
  return (
    
<div>
<label class="form-label" for="customRange1" onChang={(event) => props.setRange(event.target.value)}>Example range
</label>
<div class="range">
  <input type="range" class="form-range" id="customRange1" />
</div>
</div>
  );
};

export default RangeBar;