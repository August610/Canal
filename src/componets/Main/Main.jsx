import React, { useEffect, useState } from "react";
import { Posts } from "../Posts/Posts.jsx";

export function Main() {
  //   function randomInteger(min = 5, max = 15) {
  //     // случайное число от min до (max+1)
  //     let rand = min + Math.random() * (max + 1 - min);
  //     return Math.floor(rand);
  //   }

  /* eslint-disable */
  const [cards, setCards] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);
  const [dataPosts, setdataPosts] = useState();

  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  console.log(fetching);
  const [totalCount, setTotalCount] = useState(0);

  const contentPerPage = 20;
  const [lastIndex, setLastIndex] = useState(page * contentPerPage);
  const firstIndex = lastIndex - contentPerPage;

  function records(from, to) {
    return cards.slice(from, to);
  }

  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((data) => {
          setCards(data);
        })
        .catch((err) => {
          console.log(err);
        });
      fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((response) => response.json())
        .then((photos) => {
          setPhotos(photos);
        })
        .catch((err) => {
          console.log(err);
        });
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((users) => {
          setUsers(users);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  useEffect(() => {
    if (fetching) {
      setdataPosts(cards);
      setdataPosts(records(firstIndex, lastIndex));
      setLastIndex((prevState) => prevState + 5);
      setTotalCount(cards.length);
      setFetching(false);
    }
  }, [cards, fetching, totalCount, dataPosts]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [totalCount]);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      totalCount < dataPosts.length
    ) {
      setTotalCount((prevState) => prevState + 5);
      setFetching(true);
    }
  };
  // console.log("data", cards);
  // console.log("photo", photos);
  // console.log("users", users);
  return (
    <>
      <Posts cards={cards} photos={photos} users={users}/>
    </>
  );
}
