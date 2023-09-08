function ConditionalRendering(props) {
    const number = props.number;
    return <>
    
    {(isNaN(number) && <p>Poslani broj nije broj!</p>) || <p>Broj je: {number}</p> }

    {number>5 ? <p>Broj je veći od 5!</p> : <p>Poslani broj je manji od 5!</p>}
    
    </>;
}

export default ConditionalRendering;
