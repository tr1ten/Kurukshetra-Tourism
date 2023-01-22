function Rating({ rating }: { rating: number }) {
    return ( 
        <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((i) => {
                return (
                    <input readOnly key={i} type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400 " checked={i===Math.ceil(rating)} />
                );
            })}
</div>

    );
}

export default Rating;