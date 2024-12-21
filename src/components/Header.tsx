import Link from "next/link"
import Image from "next/image"
import { headerStyle, linkStyle, linkAtrribute } from "./Header.css"

const Header = () => {
  return (
    <header className={headerStyle}>
      <Link href= '/'>
        <Image src="/logo.svg" alt="로고" width={100} height={70}/>
      </Link>
      <div className={linkStyle}>
        <Link href='/signin' className={linkAtrribute}>로그인</Link>
        <Link href='/signup' className={linkAtrribute}>회원가입</Link>
      </div>
    </header>
  )
}

export default Header;