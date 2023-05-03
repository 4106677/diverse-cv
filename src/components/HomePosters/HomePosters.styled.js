import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;
  background-color: #fafafa;
  margin: 40px;
  border-radius: 40px;

  text-align: center;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  justify-content: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  text-align: center;
`;

export const NavTo = styled(NavLink)`
  &:last-child {
    height: 100%;
  }

  background-image: url(${props => props.poster}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-clip: padding-box;
  background-position: bottom 10px;
  background-repeat: no-repeat;
  background-position: center;

  min-width: 380px;
  height: 300px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  padding: 28px 36px 36px 36px;

  flex: 1 1 calc((100% / 3) - 2rem);

  display: flex;
  flex-direction: column;
`;
