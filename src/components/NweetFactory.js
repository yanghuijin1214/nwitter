import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const NweetFactory = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  const onFileChange = (event) => {
    //파일목록 확인
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    //url 읽기
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    if (theFile) {
      reader.readAsDataURL(theFile);
      console.log(theFile);
    }
  };
  const onClearAttachment = () => {
    setAttachment("");
  };
  //promise를 리턴하므로 async,await 써주자.
  const onSubmit = async (event) => {
    if (nweet === "") {
      return;
    }
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
      //db로 nweet값 보내주기
    }
    var now = new Date();
    console.log(now);
    const Sendnweet = {
      text: nweet,
      createdAt: Date.now(),
      Time: {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate(),
        hour: now.getHours(),
        minutes: now.getMinutes(),
      },
      creatorId: userObj.uid,
      displayName: userObj.displayName,
      attachmentUrl,
    };
    await dbService.collection("nweets").add(Sendnweet);
    setNweet("");
    setAttachment("");
  };
  return (
    <form onSubmit={onSubmit} className="factoryForm">
      <div className="factoryInput__container">
        <input
          className="factoryInput__input"
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="&rarr;" className="factoryInput__arrow" />
      </div>
      <label for="attach-file" className="factoryInput__label">
        <span>Add photos</span>
        <FontAwesomeIcon icon={faPlus} />
      </label>
      <input
        id="attach-file"
        type="file"
        accept="image/*"
        onChange={onFileChange}
        style={{
          opacity: 0,
        }}
      ></input>
      <br />

      {attachment && (
        <div className="factoryForm__attachment">
          <img
            src={attachment}
            alt={attachment}
            style={{
              backgroundImage: attachment,
            }}
          />
          <div className="factoryForm__clear" onClick={onClearAttachment}>
            <span>Remove</span>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      )}
    </form>
  );
};

export default NweetFactory;
