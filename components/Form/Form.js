import styled from "styled-components";

const StyledLabel = styled.label`
  text-align: center;
  display: block;
`;

export default function Form({ onChangeNumber }) {
  function handleChange(event) {
    const selectedNumber = event.target.value;
    onChangeNumber(selectedNumber);
  }
  return (
    <>
      <StyledLabel htmlFor="numberOfCats">
        You get&nbsp;
        <select onChange={handleChange} id="numberOfCats" name="numberOfCats">
          <option value={20} selected>
            20
          </option>
          <option value={40}>40</option>
          <option value={60}>60</option>
          <option value={80}>80</option>
          <option value={100}>100</option>
        </select>
        &nbsp;random Cats at the moment.
        <br /> Do you want more?
      </StyledLabel>
    </>
  );
}
