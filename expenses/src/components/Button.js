const Button=(props)=>{
    let icon=props.text
    return <div>
        <button onClick={props.onClick}>{icon}</button>
    </div>
}
export default Button;