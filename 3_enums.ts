enum Membership {
  Simple,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = "VK_str",
  FACEBOOK = "FACEBOOK_str",
  INSTAGRAM = "INSTAGRAM_str",
}

const social = SocialMedia.INSTAGRAM;
console.log(social);
