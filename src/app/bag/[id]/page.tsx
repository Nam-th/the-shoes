export default function Bag({ params }: { params: { id: string } }) {
     return (
          <div>
               <h2>id trang: {params.id}</h2>
          </div>
     )
}