import React, {useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroBanner from '../../../components/HeroBanner';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import { addOrRemoveFriend as kFriend } from '../../../store/friendAdd';
import request from 'umi-request';
import { useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const favs = useSelector(state => state.favorite.value);
  const [users, setUsers] = useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    f();
  }, []);

  const addFavorFriend = (e, id) => {
    e.preventDefault();
    dispatch(toggle(id));
  }
  const addFriend = (e, id) => {
    e.preventDefault();
    request
    .get("https://reqres.in/api/users/"+id)
    .then(function(response){
      dispatch(kFriend(response.data));
    });
  };

  const isFavFriend = (id) => {
    const index = favs.findIndex(x => x===id); 
    return index !== -1 ;  
  }
  return (
    <div>
      <HeroBanner />
      <div className="container">
        <h2>Social User</h2>
        <ul className="user-list row">
          {
            users.map(e => (
              <li key={e.id} className="user-item col-medium-3">
                <Link to={`/users/${e.id}`} className="user-img">
                  <img src={e.avatar} alt="user" />
                  <span className={`user-fav ${isFavFriend(e.id) ? 'active' : ''}`} onClick={(event) => addFavorFriend(event, e.id)}><FaHeart /></span>
                </Link>
                <h4 className="user-name"><Link to={`/users/${e.id}`}>{e.first_name} {e.last_name}</Link></h4>
                <p>Email : {e.email}</p>
                <p className="user-desc"><i>Lorem ipsum dolor sit amet consectetur adipisicing elit.</i></p>
                <button type="button"  onClick={(event) => addFriend(event, e.id)}>Add Friend</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Home;
