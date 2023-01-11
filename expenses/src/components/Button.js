const Button = (props) => {
  let icon = props.text;
  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        {icon}
      </button>
    </div>
  );
};
export default Button;
