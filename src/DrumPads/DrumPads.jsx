import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DrumPads(props) {
  const audioRef = useRef(null);
  const isOn = useSelector((state) => state.isOn);
  const isBank = useSelector((state) => state.isBank);
  const dispatch = useDispatch();

  const powerOFF = () => {
    dispatch({
      type: "PREVIEW",
      payload: "Power is OFF",
    });
  };

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    dispatch({
      type: "PREVIEW",
      payload: audioRef.current.id,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === props.id) {
      playSound();
    }
  };

  useEffect(() => {
    if (isOn) {
      document.addEventListener("keydown", handleKeyPress);
      
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOn]);

  return (
    <>
      <div
        className="drum-pad bold"
        id={props.id}
        onClick={isOn ? playSound : powerOFF}
      >
        <audio
          className="clip"
          ref={audioRef}
          id={props.id}
          src={props.src}
        ></audio>
        {props.id}
      </div>
    </>
  );
}
