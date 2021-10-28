//Base URL
const base_url = 'https://api.rawg.io/api/';

const apiKey = `?key=${process.env.REACT_APP_API_KEY}`;

//Get date
const getDate = () => {
    const date = new Date().toISOString().slice(0,10);
    return date;
}

//Current Date
const currentDate = getDate();

//Date but last year
const lastYear = (parseInt(currentDate.substring(0,4))-1) + currentDate.substring(4,);

//Date but next year
const nextYear = (parseInt(currentDate.substring(0,4))+1) + currentDate.substring(4,);

//Popular Games
const popular_games = `games${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming games
const upcoming_games = `games${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New Games
const new_games = `games${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;



export const popularGamesURL = () => `${base_url}${popular_games}`;

export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;

export const newGamesURL = () => `${base_url}${new_games}`;

//Get game details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}${apiKey}`

//Game Screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots${apiKey}`

//Searched game
export const searchGameURL= (game_name) => `${base_url}games${apiKey}&search=${game_name}&page_size=15`