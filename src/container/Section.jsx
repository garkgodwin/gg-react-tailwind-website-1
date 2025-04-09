import React, { useEffect, useState } from 'react'

const Section = ({variant="primary", id="", children}) => {
  const [classNames, setClassNames] = useState("");
  useEffect(() => {
    let color = "";
    if(variant === "primary") color = "bg-white";
    else if(variant === "secondary") color = "bg-(--color-secondary-dark)";
    else color = "bg-(--color-primary) text-white"
    setClassNames(`relative ${color} py-24`)
  }, [])
  return (
    <section className={classNames + ` ${variant}`} id={id}>
      {children}
    </section>
  )
}

export default Section