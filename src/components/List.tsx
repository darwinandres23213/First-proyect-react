import { MouseEvent } from "react";

type Props = {
    data: string[];
};

export const List = ({ data }: Props) => {

  const handleEvent  = (e: String)=>{
    console.log(e);
  }

  const index = 0;

  return (
    <ul className="list-group">
        {data.map((elemento,i) => 
            <li
             onClick={()=>handleEvent(elemento)}
             key={elemento}
             className={`list-group-item ${index == i ? 'active' : ''}`}
            >
                {elemento}
            </li>
        )}
    </ul>
  )
}
