import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, _id, image_url, details } = news;
  return (
    <div className="pb-4">
      <div className="card shadow-xl">
        <figure>
          <img
          className="object-scale-down"
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="ellipsis line-clamp-4">{details}</p>
          <div className="card-actions justify-start">
            <Link className="btn btn-link" to={`/news/${_id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
