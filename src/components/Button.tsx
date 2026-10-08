const Button = ({children}) => {
console.log("re-render");

  return (
    <button>{children}</button>
  )
}

export default Button