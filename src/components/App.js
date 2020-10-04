import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
//jsconfig로 import 현재위치를 src안으로 만들어줌

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setISLoggedIn] = useState(false);
  //user에 관한 정보 저장
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      //firebase의 Auth에 user가 있는지 검사
      if (user) {
        setISLoggedIn(true);
        //user 저장
        //작은 object를 가져와서 수정해야 리렌더링이 된다.
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
        setISLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    //userObj 업데이트
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        />
      ) : (
        "Initializing..."
      )}
      <footer className="footer">
        &copy; {new Date().getFullYear()} Nwitter
      </footer>
    </>
  );
}

export default App;
