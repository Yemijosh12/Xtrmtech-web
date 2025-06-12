import React from 'react'

const Button2 = ({styles}) => {
  return (
    <a href='mailto:xtrmtechnologies@gmail.com?subject=Contact Us&body=Hi, I'd like to get in touch>
    <button type="button" className={`py-4 px-6 bg-blue-gradient 
      font-poppins font-medium text-[18px] 
      text-primary outline-none ${styles} rounded-[10px]`}>
      Let's get in touch🔎.
    </button></a>
  )
}

export default Button2