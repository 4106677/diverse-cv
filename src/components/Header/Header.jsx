import { AvatarHeader, Head, Nav, Item } from './Header.styled';
import avatar from 'images/avatar.png';

export const Header = () => {
  return (
    <Head>
      <Nav>
        <Item>Home</Item>
        <Item>PortfoItemo</Item>
        <Item>Name</Item>
        <Item>Contacts</Item>
      </Nav>
      <p>Yaroslav</p>
      <AvatarHeader src={avatar} />
    </Head>
  );
};
