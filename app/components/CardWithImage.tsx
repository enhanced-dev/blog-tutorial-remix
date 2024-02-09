/**
 *
 * @param optDelayedPurchase
 * When we have a user that opts to delay purchase and targeting via GDPR
 * Don't show a buy option as CTA would violate the privacy selection
 * @returns
 */

export const CardWithImage = ({ optDelayedPurchase = false }) => {
  return (
    <div className="card m-2 w-1/3 bg-base-100 shadow-xl">
      <figure>
        <img src="/cardPlaceholder.jpeg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          {!optDelayedPurchase ? (
            <button className="btn-primary btn">Buy Now</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
