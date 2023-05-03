import { Container, List, NavTo } from './HomePosters.styled';
import theSimpsons from '../../images/homePoster/simpsons.png';
import cyberpunk from '../../images/homePoster/cyberpunk.png';
import got from '../../images/homePoster/got.png';
import netflix from '../../images/homePoster/netflix.png';

const HomePosters = () => {
  const genres = [
    { id: 1, type: 'netflix', poster: netflix },
    { id: 2, type: 'simpsons', poster: theSimpsons },
    { id: 3, type: 'got', poster: got },
    { id: 4, type: 'cyberpunk', poster: cyberpunk },
    { id: 5, type: 'classic', poster: null },
  ];

  return (
    <Container>
      <h2>choose what you like</h2>
      <List>
        {genres.map(({ id, type, poster }) => (
          <NavTo key={id} poster={poster} to={type}>
            {!poster && type}
          </NavTo>
        ))}
      </List>
    </Container>
  );
};

export default HomePosters;
