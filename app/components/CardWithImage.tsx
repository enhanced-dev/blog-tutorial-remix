export const CardWithImage = ({}) => {
  return (
    <div className="card m-2 w-1/3 bg-base-100 shadow-xl">
      <figure>
        <img src="/cardPlaceholder.jpeg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
