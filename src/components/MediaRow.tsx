import type {MediaItemWithOwner} from 'hybrid-types/DBTypes';
import {Link} from 'react-router';
//import {useState} from 'react';

const MediaRow = (props: {
  item: MediaItemWithOwner;
  setSelectedItem: (item: MediaItemWithOwner | undefined) => void;
}) => {
  const {item} = props;
  //const [dummyLikes, setDummyLikes] = useState(0);
  // Sama:
  //const dummyLikesState = useState(0);
  //const dummyLikes = dummyLikesState[0];
  //const setDummyLikes = dummyLikesState[1];

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.username}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={{item}}>
          Show
        </Link>
        {/* <button
          onClick={() => {
            setSelectedItem(item);
          }}
        >
          View
        </button> */}
      </td>
      {/*   <td>Likes: {dummyLikes}
        <button onClick={() => {
          console.log('add like to', item.title);
          setDummyLikes(dummyLikes + 1);
        }} >Add like</button>
      </td> */}
    </tr>
  );
};

export default MediaRow;
