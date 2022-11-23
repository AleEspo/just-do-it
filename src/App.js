// https://github.com/alexandreatlima/MONGO_REST

import { Routes, Route } from "react-router-dom"
import { Home} from "./Pages/Home"
import { Favourite } from "./Pages/Favourite";
import { ViewActivity } from "./Pages/ViewActivity";
import { EditActivity } from "./Pages/EditActivity"
import { Page404 } from "./Pages/Page404"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-activities" element={<Favourite />} />
        <Route path="/my-activities/view-activity/:id" element={<ViewActivity />} />
        <Route path="/my-activities/edit-activity/:id" element={<EditActivity />} />
        <Route path ="*" element={<Page404/>} />
      </Routes>
    </div>
  );
}

export default App;
