import { useContext } from "react"
import { AuthContext } from "./context"


export default function Profile() {
    const { logData } = useContext(AuthContext);

    return (
      <>
        <h1>Welcome </h1>
        <h2>{logData.name}</h2>
      </>
    )
}