import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      const posts = await fetch('https://codebuddy.review/posts');
      const postData = await posts.json();
      setData(postData.data.posts);
    };

    getDate();
  }, []);

  return (
    <Container>
      <div className="row">
        {data.map(({ id, firstName, lastName, writeup, image, avatar }) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={id}>
            <img src={avatar} alt="avatar" />
            <h5>{firstName}</h5>
            <h5>{lastName}</h5>
            <h5>{writeup}</h5>
            <img className="w-50" src={image} alt="postimage" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Posts;
