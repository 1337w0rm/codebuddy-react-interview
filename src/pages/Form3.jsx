function Form3({ input, handleInput }) {
  return (
    <>
      <select
        name="countryCode"
        value={input.countryCode}
        id="country-code"
        onChange={handleInput}
        required
      >
        <option value="">Country Code</option>
        <option value="+91">(+91) India</option>
        <option value="+1">(+1) America</option>
      </select>
      <input
        className="m-2"
        type="text"
        value={input.phoneNumber}
        name="phoneNumber"
        placeholder="Phone Number..."
        onChange={handleInput}
        required
        pattern="^([0-9]){10}$"
        onInvalid={e => e.target.setCustomValidity('Must be 10 digits')}
        onInput={e => e.target.setCustomValidity('')}
      />
      <input className="m-2" name="checkbox" type="checkbox" required />
      <label htmlFor="checkbox">Accept Terms and Conditions</label>
    </>
  );
}

export default Form3;
