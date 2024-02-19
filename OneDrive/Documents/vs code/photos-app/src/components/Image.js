export default function Image(props){
    return(
        <div className="Image">
            <img src={props.src} alt={props.alt} width={50} height={50}/>
        </div>
    );
}