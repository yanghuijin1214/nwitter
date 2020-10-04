import { dbService, storageService } from "fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, userObj, isOwner }) => {
  const nowTime = Date.now();
  const nowTime1 = new Date();
  const now = {
    year: nowTime1.getFullYear(),
    month: nowTime1.getMonth() + 1,
    date: nowTime1.getDate(),
    hour: nowTime1.getHours(),
  };
  const a = parseInt((nowTime - nweetObj.createdAt) / (60 * 1000));
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      //delete nweet. firebase는 폴더처럼 되어있음
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      //사진 삭제. url에서 reference를 찾는 법. storage에서 삭제
      await storageService.refFromURL(nweetObj.attachmentUrl).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(nweetObj, newNweet);
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div className="nweet">
      {editing ? (
        <>
          {isOwner && (
            <>
              <form onSubmit={onSubmit} className="container nweetEdit">
                <input
                  value={newNweet}
                  placeholder="Edit your nweet"
                  onChange={onChange}
                  required
                  autoFocus
                  className="formInput"
                />
                <input type="submit" value="Update Nweet" className="formBtn" />
              </form>
              <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
              </span>
            </>
          )}
        </>
      ) : (
        <>
          <h3>
            {nweetObj.displayName}
            <span className="nweet_Me">{isOwner && ` Me`}</span>
            <span className="nweet_time">
              {now.date - nweetObj.Time.date > 7 ? (
                `${nweetObj.Time.year} . ${nweetObj.Time.month} . ${nweetObj.Time.date} .`
              ) : now.date - nweetObj.Time.date !== 0 ? (
                `${now.date - nweetObj.Time.date} days`
              ) : parseInt(a / 60) !== 0 ? (
                `${parseInt(a / 60)} hrs`
              ) : (
                <>{a === 0 ? "just now" : `${a} mins`}</>
              )}
            </span>
          </h3>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentUrl && (
            <img src={nweetObj.attachmentUrl} alt={nweetObj.attachmentUrl} />
          )}
          {isOwner && (
            <div className="nweet__actions">
              <span onClick={onDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={toggleEditing}>
                <FontAwesomeIcon icon={faPencilAlt} />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
