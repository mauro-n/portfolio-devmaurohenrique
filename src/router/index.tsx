import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Projects } from "../pages/Projects"
import { Experiences } from "../pages/Experiences"
import { Education } from "../pages/Education"

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="" element={<Projects />} />
                    <Route path="xp" element={<Experiences />} />
                    <Route path="education" element={<Education />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}