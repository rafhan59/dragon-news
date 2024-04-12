// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>News details from {id}</h1>
        </div>
    );
};

// News.propTypes = {
    
// };

export default News;