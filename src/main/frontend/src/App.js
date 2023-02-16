import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersData from "./UsersData";
import Board from "./Board";

function App() {
    return (
        <div>
            <Board />
        </div>
    )
}

export default App;