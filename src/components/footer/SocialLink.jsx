/* eslint-disable react/prop-types */
// SocialLink.jsx

const SocialLink = ({ href, ariaLabel, icon: Icon, label }) => (
  <div className="social-link-div">
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      <Icon />
    </a>
    <span className="icon-label">{label}</span>
  </div>
);

export default SocialLink;
