import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './db/user.json';
import statData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';
import randomColor from 'randomcolor';
//import { buildQueries } from '@testing-library/react';

const { name, tag, location, avatar, stats } = users;

const colors = randomColor();

function App() {
  return (
    <div className="App">
      <h1>Home work #1</h1>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="statistics" stats={statData} colors={colors} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
