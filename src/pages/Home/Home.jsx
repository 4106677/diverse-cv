// import { AvatarImg, Btn, Container } from './Home.styled';
// import avatar from '../../images/avatar.png';
// import github from '../../images/github.svg';
// import { useState } from 'react';
import HomePosters from 'components/HomePosters/HomePosters';

const Home = () => {
  // const [isHover, setIsHover] = useState(false);

  return (
    // <Container>
    //   <h1 style={{ textAlign: 'center' }}>Wellcome to tweets app</h1>
    //   <Btn to={'tweets'}>To Tweets</Btn>
    //   <>
    //     <p>Created by Yaroslav O.</p>
    //     <a
    //       onMouseEnter={() => setIsHover(true)}
    //       onMouseLeave={() => setIsHover(false)}
    //       href="https://github.com/4106677"
    //       rel="noopener noreferrer"
    //       target="blanc"
    //     >
    //       <AvatarImg src={isHover ? github : avatar} alt="avatar" />
    //     </a>
    //   </>
    // </Container>
    <>
      <HomePosters />
      <p>text lorem</p>
    </>
  );
};

export default Home;
