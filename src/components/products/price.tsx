

export default function Price (props: any) {
     const currentPrice: number = Math.round(props.priceOrigin * (1-props.discount/100));
     return (
          <div className="">
               <span className="font-bold text-2xl mr-2">${currentPrice}</span>
               {
                    props.discount > 0 && (
                         <span className="text-[#bbb] text-sm line-through">{props.priceOrigin}</span>
                    )
               }
               {
                    props.discount > 0 && (
                         <span className="text-white bg-black ml-10 rounded-sm text-xs">-{props.discount}%</span> 
                    )
               }
          </div>
     )
}