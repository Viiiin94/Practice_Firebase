import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "../routes/Auth"
import Home from "../routes/Home"

const Routers = ({ isLoggedIn }: any) => {
	return (
		<BrowserRouter>
			<Routes>
				{isLoggedIn ? (
					<Route path="/" element={<Home />}></Route>
				) : (
					<Route path="/" element={<Auth />}></Route>
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default Routers