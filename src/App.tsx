import React from "react";
import {Dropdown} from "./components/Dropdown";

const App = () => {
    return (
        <div>
            <Dropdown label="Select" value={[0, 1]}
                      options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}/>
        </div>
    );
}

export default App;
