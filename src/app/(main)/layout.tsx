import React from 'react'

type Props = {children:React.ReactNode}

const Layout = (props: Props) => {
  return (
    <><div className="flex overflow-hidden"></div><div className="w-full">{props.children}</div></>
    )

}

export default Layout