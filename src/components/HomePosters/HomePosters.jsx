import { Container, List, NavTo } from './HomePosters.styled';
import theSimpsons from '../../images/homePoster/simpsons.png';
import cyberpunk from '../../images/homePoster/cyberpunk.png';
import got from '../../images/homePoster/got.png';
import netflix from '../../images/homePoster/netflix.png';

const styles = [
  { id: 1, type: 'netflix', poster: netflix },
  { id: 2, type: 'simpsons', poster: theSimpsons },
  { id: 3, type: 'got', poster: got },
  { id: 4, type: 'cyberpunk', poster: cyberpunk },
  { id: 5, type: 'classic', poster: null },
];

export const HomePosters = () => {
  return (
    <Container>
      <h1>choose what you like</h1>
      <List>
        {styles.map(({ id, type, poster }) => (
          <NavTo key={id} poster={poster} to={type}>
            {!poster && type}
          </NavTo>
        ))}
      </List>
    </Container>
  );
};
