function placeCard(props: any) {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl w-1/3">
      <figure>
        <img src={props.url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.Title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <a href={props.direction}>
            <button className="btn btn-primary">Direction</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default placeCard;
