import { useCallback } from "react";

export function Node3d(props) {
  const onChange = useCallback((evt: { target: { value: any; }; }) => {
    console.log(evt.target.value);
  }, []);

  return (

    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}