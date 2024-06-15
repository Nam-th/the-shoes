
interface ButtonProps {
     
}


export default function Button(props: any) {

     let classBtn: string = "py-3 text-base rounded-3xl font-semibold hover:opacity-80 cursor-pointer ";
     if (props.type === "primary")
          classBtn += " bg-primary-color border-none focus:outline-none";
     else if (props.type === "sub")
          classBtn += " text-primary-color bg-transparent border-2 border-primary-color"
     else if (props.type === "normal")
          classBtn += " border-1 border-white text-white bg-transparent text-sm px-7 py-1"

     if (props.css != "")
          classBtn += " " + props.css;
     return (
          <button
               className={classBtn}
          >
               {props.text}
          </button>
     )
}