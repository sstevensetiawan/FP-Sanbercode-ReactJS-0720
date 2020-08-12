import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movie, setMovie] = useState(null)
    // const [movie, setMovie] = useState([
    //     {
    //         id: "1",
    //         created_at: "2020-08-12 06:33:50",
    //         updated_at: "2020-08-12 06:33:50",
    //         title: "Stand by Me Doraemon (スタンド・バイ・ミー ドラえもん)",  
    //         description: "In the suburbs of Tokyo some time ago, there lived a clumsy boy about 10 years old. There appeared in front of him named Sewashi, Nobita's descendant of four generations later from the 22nd century, and Doraemon, a 22nd century cat-type caretaker robot who helps people with its secret gadgets. Sewashi claims that his family is suffering from the debts Nobita made even to his generation, so in order to change this disastrous future, he brought along Doraemon as Nobita's caretaker to bring happiness to his future, although Doraemon is not happy about this. And so Sewashi installed an accomplishment program into Doraemon forcing him to take care of Nobita. Unless he makes Nobita happy, Doraemon can no longer go back to the 22nd century. This is how the life of Doraemon and Nobita begins. Will Doraemon succeed this mission and return to the 22nd century?", 
    //         year: 2014, 
    //         duration: 95, 
    //         genre:"Animation, Comedy, Drama", 
    //         rating:7,
    //         review: "",
    //         image_url: "https://i.postimg.cc/Ss9KcM9F/MV5-BOTlk-NWU4-Zm-It-Nzdh-ZC00-NDEz-LWFh-NTQt-NWZk-Yzhk-YTZh-Zm-E2-Xk-Ey-Xk-Fqc-Gde.jpg"},
    //     {
    //         id: "2",
    //         created_at: "2020-08-12 06:33:50",
    //         updated_at: "2020-08-12 06:33:50",
    //         title: "Trolls",  
    //         description: "From the creators of Shrek comes the most smart, funny, irreverent animated comedy of the year, DreamWorks' Trolls. This holiday season, enter a colorful, wondrous world populated by hilariously unforgettable characters and discover the story of the overly optimistic Trolls, with a constant song on their lips, and the comically pessimistic Bergens, who are only happy when they have trolls in their stomach. Featuring original music from Justin Timberlake, and soon-to-be classic mash-ups of songs from other popular artists, the film stars the voice talents of Anna Kendrick, Justin Timberlake, Russell Brand, James Corden, Kunal Nayyar, Ron Funches, Icona Pop, Gwen Stefani, and many more. DreamWorks' TROLLS is a fresh, broad comedy filled with music, heart and hair-raising adventures. In November of 2016, nothing can prepare you for our new Troll world.", 
    //         year: 2016, 
    //         duration: 92, 
    //         genre:"Animation, Adventure, Comedy", 
    //         rating:6,
    //         review: "",
    //         image_url: "https://m.media-amazon.com/images/M/MV5BMTkxNDc3OTcxMV5BMl5BanBnXkFtZTgwODk2NjAzOTE@._V1_SY1000_CR0,0,673,1000_AL_.jpg"}
    // ]);
    return (
        <MovieContext.Provider value={[movie, setMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
};

export const StatusFormMovie = props => {
    const [statusFormMovie, setStatusFormMovie] = useState("Insert");
    return (
        <MovieContext.Provider value={[statusFormMovie, setStatusFormMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
};

export const IndexFormMovie = props => {
    const [indexOfFormMovie, setIndexOfFormMovie] = useState(-1)
    return (
        <MovieContext.Provider value={[indexOfFormMovie, setIndexOfFormMovie]}>
            {props.children}
        </MovieContext.Provider>
    );
};

export const DataFilm = props => {
    const [dataFilm, setDataFilm] = useState({
        title: "",  
        description: "", 
        year: 2020, 
        duration: 1, 
        genre:"", 
        rating:1,
        review: "",
        image_url: ""})
    return (
        <MovieContext.Provider value ={[dataFilm, setDataFilm]}>
            {props.children}
        </MovieContext.Provider>
    )
}