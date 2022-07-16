import React from "react";
const Home = () => {

// return(
//     <>
//     <div className="header">
//         <div className="row1">
//             <h1>A room without Books is like<br/> a body without soul</h1>
//         </div>
//         <div className="row2">
//             <h2>Find Your Book</h2>
//             <div className="search">
//                 <input type="text" placeholder="Enter Your Book Name"/>
//                 <button><i class ="fas fa-search"></i></button>
//             </div>
//             <img src= "books.jpg"alt=""/>
//         </div>
//     </div>
// </>
// )


// }


// export default Home;










    return (
        <div
            style={{
                backgroundImage: `url("https://img.freepik.com/premium-vector/people-sit-comfy-armchairs-with-book-tablet-laptop-vector-flat-illustration-man-woman-reading-working-public-library-isolated-white-background-shelves-racks-with-books_198278-10718.jpg?w=1060")`,
                backgroundPosition: `cover`
            }}
        >
            <div style={{ minHeight: "120vh", textShadow: '2px 2px #f2f2f2' }} className="container">
                <p className="display-4 text-danger pt-5">Book Recommendation App</p>
              

            </div>
        </div >
    );
}

export default Home;




// import react ,{useState}from "react";
// //import Card from "./Card";
// import axios from "axios";
// const Home=()=>{
//     const [search,setSearch]=useState("");
//     const [bookData,setData]=useState([]);
//     const searchBook=(evt)=>{
//         if(evt.key==="Enter")
//         {
//             axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
//             .then(res=>setData(res.data.items))
//             .catch(err=>console.log(err))
//         }
//     }
//     return(
//         <>
//             <div className="header">
//                 <div className="row1">
//                     <h1>A room without books is like<br/> a body without a soul.</h1>
//                 </div>
//                 <div className="row2">
//                     <h2>Find Your Book</h2>
//                     <div className="search">
//                         <input type="text" placeholder="Enter Your Book Name"
//                         value={search} onChange={e=>setSearch(e.target.value)}
//                         onKeyPress={searchBook}/>
//                         <button><i className="fas fa-search"></i></button>
//                     </div>
//                     <img src="./images/bg2.png" alt="" />
//                 </div>
//             </div>

//             <div className="container">
//               {
//                   //  <Card book={bookData}/>
//               }  
//             </div>
//         </>
//     )
// }
// export default Home;