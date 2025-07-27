import { TailSpin } from "react-loader-spinner"
import Logo from "../assets/icons/logo.svg"

export default function Intro() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <TailSpin  height={60} />
      <img width={300} src={Logo} alt="logo do projeto" />
    </div>
  )
}
