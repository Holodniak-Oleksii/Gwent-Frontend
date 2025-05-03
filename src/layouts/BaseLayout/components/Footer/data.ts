import InstagramIcon from "@/common/icons/social/InstagramIcon";
import PinterestIcon from "@/common/icons/social/PinterestIcon";
import TwitterIcon from "@/common/icons/social/TwitterIcon";
import YouTubeIcon from "@/common/icons/social/YouTubeIcon";

export const social = [InstagramIcon, TwitterIcon, PinterestIcon, YouTubeIcon];

export const footerNavigation = {
  "navigation.title.links": [
    "navigation.aboutUs",
    "navigation.rules",
    "navigation.contacts",
    "navigation.market",
  ],
  "navigation.title.support": [
    "navigation.fqa",
    "navigation.howIfWorks",
    "navigation.teams",
  ],
  "navigation.title.product": [
    "navigation.gamePlay",
    "navigation.abilities",
    "navigation.forces",
    "navigation.fractions",
  ],
  "navigation.title.languages": [
    "navigation.ukrainian",
    "navigation.poland",
    "navigation.english",
    "navigation.deutschland",
  ],
} as const;

export const contactText =
  "Dive into the world of virtual beauty: where dreams become reality through 3D Art.";
