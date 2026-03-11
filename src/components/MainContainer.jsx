

function MainContainer(props) {
    return(
        <section className={`flex flex-col relative w-[80%] ${props.style}`} >
            <img src={props.img} alt="photo" loading="lazy" className="max-w-32" />
            <p className="rotate-90 absolute text-xs w-25 left-15 top-9">{props.position}</p>
            <p className="font-bold text-sm">{props.name}</p>
        </section>
    );
}

export default MainContainer;