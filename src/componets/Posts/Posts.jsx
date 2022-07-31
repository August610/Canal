import { Post } from "../Post/Post";
import "./styles.css";

function Posts(props) {
  const { cards, users, photos } = props;
//   console.log(users);

  // console.log(cards);
  return (
    <>
      <div className="cards">
        {cards?.map((post) => (
          <Post key={post.id} {...post} users={users} />
        ))}
      </div>
    </>
  );
}

export { Posts };
