function Form1({ input, handleInput }) {
  return (
    <>
      <input
        className="m-2"
        name="emailId"
        value={input.emailId}
        type="email"
        placeholder="Email..."
        onChange={handleInput}
        required
      />
      <input
        className="m-2"
        name="password"
        value={input.password}
        type="password"
        placeholder="Password..."
        pattern="^(?=.*[a-z].*[a-z])(?=.*[A-Z].*[A-Z])(?=.*\d.*\d)(?=.*[@$!%*?&].*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        onInvalid={e =>
          e.target.setCustomValidity(
            'Password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.',
          )
        }
        onInput={e => e.target.setCustomValidity('')}
        onChange={handleInput}
        required
      />
    </>
  );
}

export default Form1;
