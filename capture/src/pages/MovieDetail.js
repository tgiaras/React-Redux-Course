import {useHistory} from 'react-router-dom';
import { useState , useEffect} from 'react';
import { MovieState } from '../movieState';

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies,setMovies] = useState(MovieState);
    const [movie,setMovie] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0])
    }, [movies, url])

    return (
        <>
            {movie && (
                <motion.div className="moviedetails" variants={pageAnimation} initial="hidden" animate="show" exit="exit">
                    <div className="headline">
                        <h2>
                            {movie.title}
                        </h2>
                        <img src={movie.mainImg} alt="movie" />
                    </div>
                    <div className="awards">
                        {movie.awards.map((award) => (
                            <div className="award">
                                <h3>
                                    {award.title}
                                </h3>
                                <div className="line"></div>
                                <p>
                                    {award.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="imgdisplay">
                        <img src={movie.secondaryImg} alt="movie" />
                    </div>           
                </motion.div>
            )}
        </>
    )
}

export default MovieDetail;