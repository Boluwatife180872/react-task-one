import "./ProfileCard.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <div className="profile-card__image-container">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="profile-card__image"
          />
        </div>
      </div>
      <div className="profile-card__content">
        <h2 className="profile-card__name">{name}</h2>
        <p className="profile-card__bio">{bio}</p>
        <div className="profile-card__social">
          <a
            href="https://github.com/Boluwatife180872" target="_blank"
            className="profile-card__social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ifeanyichukwu-onukwu-41b913310/" target="_blank"
            className="profile-card__social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Bholu_1808" target="_blank"
            className="profile-card__social-link"
          >
            <FaTwitter />
          </a>
          <a
            href="https://onukwuboluwatife-portfolio.vercel.app/" target="_blank"
            className="profile-card__social-link"
          >
            <FaUser />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
