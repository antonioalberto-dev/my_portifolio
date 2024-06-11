'use client'

import Image from "next/image"

const DevImg = ({containerStyles, imaSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imaSrc} fill priority/>
    </div>
  )
}

export default DevImg