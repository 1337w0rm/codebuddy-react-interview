import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const Home = () => {
  const [page, setPage] = useState(0);
  const [input, setInput] = useState({});
  const [clickSave, setClickSave] = useState({});

  const navigate = useNavigate();

  const onSubmit = () => navigate('/posts');

  const handleInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    const data = await fetch('https://codebuddy.review/submit', {
      method: 'POST',
      body: JSON.stringify(clickSave),
    });
    console.log(await data.json());
  };

  const renderForm = () => {
    if (page === 0) {
      return <Form1 input={clickSave} handleInput={handleInput} />;
    }

    if (page === 1) {
      return <Form2 input={clickSave} handleInput={handleInput} />;
    }

    return <Form3 input={clickSave} handleInput={handleInput} />;
  };

  const handleSave = e => {
    e.preventDefault();
    setClickSave({ ...input });
    if (e.nativeEvent.submitter.innerHTML === 'Save and Next') {
      setPage(page + 1);
    }

    if (page === 2) {
      submitForm();
      navigate('/posts');
    }
  };

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
      <Container className="w-50">
        <div className="d-flex justify-content-between mb-5">
          <Button onClick={() => setPage(0)}>Form1</Button>
          <Button
            onClick={() => setPage(1)}
            disabled={clickSave.emailId === undefined && clickSave.password === undefined}
          >
            Form2
          </Button>
          <Button
            disabled={clickSave.firstName === undefined && clickSave.address === undefined}
            onClick={() => setPage(2)}
          >
            Form3
          </Button>
        </div>
        <Form onSubmit={handleSave}>
          {renderForm()}
          <div className="m-2">
            <Button className="m-2" disabled={page === 0} onClick={() => setPage(page - 1)}>
              Back
            </Button>
            <Button className="m-2" type="submit">
              Save
            </Button>
            <Button
              type="submit"
              value="next"
              onClick={e => {
                e.target.submitter = 'Next';
              }}
              className="m-2 save-next"
              disabled={page === 2}
            >
              Save and Next
            </Button>
          </div>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
