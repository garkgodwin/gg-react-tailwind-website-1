import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router';


const primary = "text-(--color-secondary-light) bg-(--color-primary) hover:bg-(--color-primary-dark)";
const secondary = "text-(--color-primary) bg-(--color-secondary-light) hover:bg-(--color-primary-dark) hover:text-white";

const Button = ({variant="primary", type="button", to="", handleClick, children}) => {
  const [colorNames, setColorNames] = useState(variant === 'primary' ? primary : secondary);
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    setClassNames(`${colorNames} font-semibold px-8 py-3 rounded-full text-sm md:text-base transition`)
  },[colorNames])
  if(type === "submit"){
  return ( 
    <button
      type={type}
      className={classNames}
    >
      {children}
    </button>
    )
  }
  else if(type === "link"){
    if(to.includes("#")){
      return <a href={to} className={classNames}>
        {children}
      </a>
    }
    else{
      return <NavLink to={to} className={classNames}>
        {children}
      </NavLink>
    }
  }
  else{
  return ( 
  <button
    type={type}
    onClick={(e) => {
      e.preventDefault();
      handleClick();
    }}
    className={classNames}
  >
    {children}
  </button>
  )
}
}

export default Button