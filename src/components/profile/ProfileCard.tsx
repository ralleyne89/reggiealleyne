
import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTags from './ProfileTags';
import ProfileActions from './ProfileActions';

const ProfileCard = () => {
  return (
    <div className="glass-card w-full max-w-[463px] p-6 rounded-xl border-[rgba(255,255,255,0.1)] border-solid transition-all duration-500 hover:bg-[rgba(25,25,25,0.8)] hover:border-purple/40 hover:shadow-glow">
      <ProfileHeader />
      <ProfileTags />
      <ProfileActions />
    </div>
  );
};

export default ProfileCard;
