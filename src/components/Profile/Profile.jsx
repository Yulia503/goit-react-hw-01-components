import React from 'react';
import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  UserName,
  Tag,
  Location,
  StatsInformationList,
  StatsInformationItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsInformationList>
        < StatsInformationItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </ StatsInformationItem>
        < StatsInformationItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ StatsInformationItem>
        < StatsInformationItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </ StatsInformationItem>
      </StatsInformationList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
