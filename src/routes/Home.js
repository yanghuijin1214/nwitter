import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  //db에 있는 nweet가져오기
  const [nweets, setNweets] = useState([]);

  //query말고 snapshot을 사용해서 db로부터 실시간으로 확인하자
  useEffect(() => {
    //getNweets(); => query
    //db가 delete,update될때마다 알려줌. re-render하지 않아도됨
    //getNweets은 처음 render될때만 실행되었다
    dbService
      .collection("nweets")
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray.reverse());
      });
  }, []);

  return (
    <div className="container">
      <NweetFactory userObj={userObj} />
      <div style={{ marginTop: 30 }}>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            userObj={userObj}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
