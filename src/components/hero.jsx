const HeroSection=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Your feet deserve the best and we are here to help you with our shoes</p>
                <div className="hero-btn">
                    <button className="first-btn">Shop now</button>
                    <button className="second-btn">Category</button>
                </div>
            
            <div className="hero-shop">
                <p>Also Available On</p>
                <div className="brand-images">
                    <img src="/images/amazon.png" alt="amazon-logo"/>
                    <img src="/images/flipkart.png" alt="flipkart-logo" />
                </div>
            </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="show_image" />
            </div>
        </main>
    );
};

export default HeroSection;