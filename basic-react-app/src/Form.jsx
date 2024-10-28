
function handleForm(event){
    event.preventDefault();
    console.log("Button was submitted");
    // console.log(event);
}

export default function Form(){
    return (
        <form>
            <input placeholder="write something"></input>
            <button onClick={handleForm}>Submit</button>
        </form>
    )
}