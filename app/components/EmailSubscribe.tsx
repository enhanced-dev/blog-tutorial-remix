export const EmailSubscribe = ({}) => {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="username@site.com"
        className="input-bordered input w-1/2 max-w-xs"
      />
      <button
        type="button"
        className="btn-primary btn left-4 right-0 top-0 rounded-l-none"
      >
        Subscribe
      </button>
    </div>
  );
};
