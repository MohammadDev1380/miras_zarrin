import './product-card.scss';

const ProductCard = ({ img, title, subTitle }) => {
    return (
        <div className="pro-card">
            <div className="img-holder">
                <img src={img} alt="" />
            </div>
            <div className="body">
                <h5>
                    {title}
                </h5>
                <p>
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default ProductCard;