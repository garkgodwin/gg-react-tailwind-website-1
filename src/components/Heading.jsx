import React, { useEffect, useState } from 'react'

const Heading = ({variant="primary", type="h2", children}) => {
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    let textSize = "";
    if(type === "h2") textSize = "text-4xl"
    else if(type === "h1") textSize ="text-5xl"
    setClassNames(`${textSize} font-bold mb-6 text-center heading`)
  }, [])
  
  if(type === "h1"){
    return <h1 className={classNames}>
      {children}
    </h1>
  }
  return (
    <h2 className={classNames}>{children}</h2>
  )
}

export default Heading