


export default function ColorsSelect(props: any) {
     
     let classNameColor = `bg-[${props.color}] rounded-full h-5 w-5`; 
    
     return(
          <div className={classNameColor}></div>
     )
}