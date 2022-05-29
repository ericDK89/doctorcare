import facebookIcon from "../assets/images/facebookIcon.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import youtubeIcon from "../assets/images/youtubeIcon.svg";

interface SocialLinksProps {
  marginTop: string;
}

export function SocialLinks({ marginTop }: SocialLinksProps) {
  return (
    <div className={marginTop}>
      <ul className="flex justify-center gap-8">
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="" />
          </a>
        </li>

        <li>
          <a href="https://pt-br.facebook.com/" target="_blank">
            <img src={facebookIcon} alt="" />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={youtubeIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
