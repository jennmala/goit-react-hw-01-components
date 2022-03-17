import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friend>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </Friend>
  );
};
