const Button = ({children}:{children:any}) => {
console.log("re-render");

  return (
    <button>{children}</button>
  )
}

export default Button