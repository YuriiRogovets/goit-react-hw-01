import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileBox}>
        <img className={css.profilImage} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers</span>
          <span className={css.profileStatsValue}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views</span>
          <span className={css.profileStatsValue}>{views}</span>
        </li>
        <li className={css.profileItem}>
          {" "}
          <span>Likes</span>
          <span className={css.profileStatsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
