import React, { useState } from "react"

const AskNickname = ({ io, setNickname, nickname }) => {
  const [checkLog, setCheckLog] = useState(false)

  const handleNickname = event => {
    setNickname(event.target.value)
  };

  const sendNickname = () => {
    io.emit("event::initialize", { nickname })
  };

  io.on("event::connected", () => {
    setCheckLog(true)
  })

  return (
    <div className="field">
      <div className="control">
        {!checkLog ?
          <input className="input" onChange={handleNickname} value={nickname} />:
          /*!A changer!*/<input className="input" value={nickname} disabled/> 
        }
        </div>
      <div className="control">
        {!checkLog ?
        <a className="button is-info" onClick={sendNickname}>
          Connect
        </a>:
        <span>Wait</span>
        }
      </div>
    </div>
  );
};

export default AskNickname