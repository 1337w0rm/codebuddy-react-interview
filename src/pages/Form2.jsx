function Form2({ input, handleInput }) {
  return (
    <>
      <input
        className="m-2"
        type="text"
        value={input.firstName}
        name="firstName"
        placeholder="First Name..."
        onChange={handleInput}
        pattern="^([A-Za-z]){2,50}$"
        required
        onInvalid={e => e.target.setCustomValidity('Only Alphabets Allowed')}
        onInput={e => e.target.setCustomValidity('')}
      />
      <input
        className="m-2"
        type="text"
        value={input.lastName}
        name="lastName"
        placeholder="Last Name..."
        onChange={handleInput}
        pattern="^([A-Za-z])+$"
        onInvalid={e => e.target.setCustomValidity('Only Alphabets Allowed')}
        onInput={e => e.target.setCustomValidity('')}
      />
      <input
        className="m-2"
        type="text"
        value={input.address}
        name="address"
        placeholder="Address..."
        onChange={handleInput}
        minLength="10"
        required
      />
    </>
  );
}

export default Form2;
