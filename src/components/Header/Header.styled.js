import styled from 'styled-components';

export const Head = styled.header`
  display: flex;

  background-color: #62b8e7;
  width: 100%;
  height: 60px;

  /* overflow: hidden; */

  text-align: center;
  border-radius: 40px;
  align-items: center;

  /* padding: 0 40px; */
  /* position: relative; */

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Nav = styled.ul`
  display: flex;

  /* align-items: center; */
  gap: 1rem;

  margin-right: auto;
  margin-left: 40px;
`;

export const Item = styled.li`
  &:last-child {
    /* margin-left: auto; */
    /* display: flex; */
    /* align-items: center; */

    /* width: fit-content; */
  }

  /* display: flex; */
  /* position: relative; */
`;

export const AvatarHeader = styled.img`
  /* position: absolute;
  right: 0;
  top: 0; */

  height: 60px;
  /* margin-left: auto; */
  border-radius: 50%;
`;
