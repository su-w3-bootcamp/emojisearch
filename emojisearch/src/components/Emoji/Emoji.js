function Emoji(props) {
    const {icon, name} = props;
    return(
        <div>
            {icon} {name}
        </div>
    );
}

export default Emoji;