import React, {useState, useEffect} from "react"

const MagicNumber = ({io, nickname}) => {
    const [magicNumber, setMgcNumber] = useState("")
    const [answer, setAnswer] = useState("")
    
    const handleMgcNumber = event => {
        setMgcNumber(event.target.value)
    }

    const sendMgcNumber = () => {
        io.emit("event::magicNumber", {magicNumber, nickname})
    }

    useEffect(() => {
        io.on("event::magicNumberState", payload => {
            setAnswer(payload.state)
        })
    }, [])

    return (
        <div className="field">
      <div className="control">
          <input className="input" onChange={handleMgcNumber} value={magicNumber} />
        </div>
      <div className="control">
        <a className="button is-info" onClick={sendMgcNumber}>
          Try
        </a>
    <span>Answer was: {answer}</span>
      </div>
    </div>
    )
}

export default MagicNumber
