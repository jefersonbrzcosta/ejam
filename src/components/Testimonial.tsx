import userAvatar from "../assets/images/user-avatar.png";
import Stars from "../assets/icons/stars.svg?react";
import Verified from "../assets/icons/verify.svg?react";

export const UserInfo = () => {
  return (
    <div className="flex gap-[13px]">
      <div>
        <img src={userAvatar} alt="user-avatar" />
      </div>
      <div className="flex flex-col mt-2">
        <Stars />
        <div className="flex gap-[10px]">
          <div>Ken T.</div>
          <Verified className="mt-1" />
          <p className="text-[#5BB59A]">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};

export const Testimonial = () => {
  return (
    <div className="p-6 mt-6 flex flex-col bg-white gap-[18px]">
      <UserInfo />
      <div>
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </div>
    </div>
  );
};
