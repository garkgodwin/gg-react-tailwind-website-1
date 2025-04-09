import React, { useEffect, useState } from 'react'

const Heading = ({variant="primary", children}) => {
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    let color = "";
    let textSize = "";
    if(variant==="primary") color = "text-(--color-text-body)"
    else color = "";
    textSize = "text-lg"
    setClassNames(`${color} ${textSize} max-w-3xl mx-auto mb-8 body`)
  }, [])
  return (
    <p className={classNames}>
      {children}
    </p>  
  )
}

export default Heading