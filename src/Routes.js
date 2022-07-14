import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookData from './components/BookData';
import Header from "./components/Header";
import SignIn from './components/SignIn';
import Home from "./components/Home";
const Routes = () => {

    return (
        <div>
            <div>
                <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/signin'> <SignIn/> </Route>
                    <Route path='/bookdata'> <BookData/> </Route>
                    <Route path='/home'> <Home/> </Route>
                </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Routes;
// const Routes = () => {

//         return (
//             <div className="container-fluid">
//                 <p>Routes Component</p>
//                     {/* base url - http://localhost:3000/
    
//                 http://localhost:3000/home
//                 http://localhost:3000/signin
//                 http://localhost:3000/bookdata
    
//                 if /login then display login component
//                 if /empdata then display empData component
//                 if /parent then display parent component
//                */}

//              </div >
//         );
//     }
    
//     export default Routes;