import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addOrRemoveFriend as kFriend } from '../../../store/friendAdd';
import { useSelector } from 'react-redux';

const Friends = () => {
    const dispatch = useDispatch();
    const friends  = useSelector(state => state.friends.value);

    const removeFriend = (e, id) => {
      e.preventDefault();
      const idx  = friends.findIndex(x => x.id === id);
      if( idx !== -1){
        dispatch(kFriend(friends[idx]));
      }  
    };

    return (
        <div>
          <div className="container">
            <h2>Friend List</h2>
            <ul className="user-list row">
              {
                friends.map(e => (
                  <li key={e.id} className="user-item col-medium-3">
                    <Link to={`/users/${e.id}`} className="user-img">
                      <img src={e.avatar} alt="user" />
                    </Link>
                    <h4 className="user-name"><Link to={`/users/${e.id}`}>{e.first_name} {e.last_name}</Link></h4>
                    <p>Email : {e.email}</p>
                    <p className="user-desc"><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i></p>
                    <button type="button" className="btn btn-remove" onClick={(event) => removeFriend(event, e.id)}>Remove Friend</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      );
};
export default Friends;