import "./App.css";
import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../Data/userData.json";
import friends from "../../Data/friends.json";
import transactions from "../../Data/transactions.json";

function App() {
  return (
    <div className=".container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
