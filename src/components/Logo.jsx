import Image from 'next/image'
import logo from '@/images/305carwash_logo.png'

//
export function Logo(props) {
  return (
    <Image
      {...props}
      src={logo}
      alt="305 car wash miami official logo"
      width={100}
      height={100}
    />
  )
}
