import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTags from './ProfileTags';
import ProfileActions from './ProfileActions';

const ProfileCard = () => {
  return (
    <div className="bg-[rgba(16,16,16,1)] border w-full max-w-[463px] p-5 rounded-xl border-[rgba(255,255,255,0.06)] border-solid transition-all duration-300 hover:bg-[rgba(20,20,20,1)] hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] hover:-translate-y-1">
      <ProfileHeader />
      <ProfileTags />
      <ProfileActions />
    </div>
  );
};

export default ProfileCard;
