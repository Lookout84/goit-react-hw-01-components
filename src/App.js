import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './db/user.json';
import statData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const { name, tag, location, avatar, stats } = users;

// console.log(statData);

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
