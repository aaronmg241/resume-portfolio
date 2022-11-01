function LoadingPage() {
    return (
        <div
            className="loading-page"
            onAnimationEnd={(e) => {
                if (e.target.className.includes('loading-page')) e.target.remove();
            }}
        >
            <div className="title-container">
                <div className="title-word"> These are </div>
                <div className="title-word"> Aaron </div>
                <div className="title-word"> Grubb's </div>
                <div className="title-word"> Projects </div>
            </div>
            <div className="title-cover" />
        </div>
    );
}

export default LoadingPage;
