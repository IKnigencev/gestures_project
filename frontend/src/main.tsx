import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app.tsx'
import './index.css'
import {Container, CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<>
				<CssBaseline/>
				<App />
			</>

		</BrowserRouter>
	</React.StrictMode>
)
