

export default function Product(props: any) {

     return(
          <div className="flex items-center">
               <img src={props.imgSrc} alt="" className="w-20 h-20 mr-3"/>
               <span>{props.name}</span>
          </div>
     )
}