import React from "react";
import DrumPads from "./DrumPads/DrumPads";
import "./App.scss";
import { useSelector, useDispatch } from "react-redux";


export default function App() {
  const musicSetOne = [
    {
      id: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keyCode: 81,
      keyName: "Heater-1"
    },
    {
      id: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyCode: 87,
      keyName: "Heater-2"
    },
    {
      id: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyCode: 69,
      keyName: "Heater-3"
    },
    {
      id: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyCode: 65,
      keyName: "Heater-4_1"
    },
    {
      id: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyCode: 83,
      keyName: "Heater-6"
    },
    {
      id: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyCode: 68,
      keyName: "Dsc_Oh"
    },
    {
      id: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keyCode: 90,
      keyName: "Kick_n_Hat"
    },
    {
      id: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyCode: 88,
      keyName: "RP4_KICK_1"
    },
    {
      id: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keyCode: 67,
      keyName: "Cev_H2"
    }
  ];
  
  
  const renderDrumPads = () => {
    return musicSetOne.map(({ id, src, keyName }) => (
      <DrumPads key={id} id={id} src={src} keyName={keyName} />
    ));
  };

  const isBank = useSelector((state) => state.isBank);
  const isOn = useSelector((state) => state.isOn);
  const preview = useSelector((state) => state.preview);
  const dispatch = useDispatch();


  const onChangePower = (e) => {
    if (e) {
      dispatch({
        type: "TOGGLE_POWER",
      });
    }
    dispatch({
      type: "PREVIEW",
      payload: ""
    });
  };
  const onChangeBank = (e) => {
    if (e) {
      dispatch({
        type: "TOGGLE_BANK",
      });
    }
  };


  return (
    <div className="container">
      <div className="drum-machine" id="drum-machine">
        <div className="drum-pads-container">{renderDrumPads()}</div>

        <div className="display" id="display">
          <h1 >Drum Machine </h1>
          <p>(React + Redux)</p>

          <p className="bold">Power</p>
          <label className="toggle power">
            <input type="checkbox" onChange={onChangePower} />
            <span className="slider"></span>
            <span className="labels" data-on="ON" data-off="OFF"></span>
          </label>

          <div className="preview">
            <p>{preview}</p>
          </div>
          {/** WILL BE CHANGE IN THE FUTURE */}
          {/* <p className="bold">Banks</p>
          <label className="toggle loop">
            <input type="checkbox" onChange={onChangeBank} />
            <span className="slider"></span>
            <span className="labels" data-on="ON" data-off="OFF"></span>
          </label> */}
        </div>
      </div>
    </div>
  );
}
