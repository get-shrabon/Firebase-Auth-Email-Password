import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] container mx-auto flex items-center justify-center text-center">
            <div>
                <h1 className="text-5xl  font-bold mb-1">Oops !!!</h1>
                <p className="text-error mb-4">This page not Avilable</p>
                <Link to="/"><button className="btn btn-error">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;