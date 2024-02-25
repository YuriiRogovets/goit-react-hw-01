import css from "./FriendListItem.module.css";

function FriendListItem({ image, name, isOnline = false }) {
  return (
    <div className={css.friendBox}>
      <img src={image} alt="Avatar" width="60" />
      <p className={css.friendName}>{name}</p>
      <p
        className={`${css.friendStatus} ${
          isOnline && css.friendStatusIsOnline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
