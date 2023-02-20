import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllPerson from "./component/pages/AllPerson";
import PersonAddEdit from "./component/pages/PersonAddEdit";
import PersonInfo from "./component/pages/PersonInfo";
import Navigation from "./component/utils/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllPerson />} />
        <Route path="/profile/:id" element={<PersonInfo />}/>
        <Route path="/profile/edit/:id" element={<PersonAddEdit />}/>
        <Route path="/profile/add" element={<PersonAddEdit />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
