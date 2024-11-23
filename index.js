import express from 'express';
import cors from "cors";
import Hello from "./Hello.js"
import Lab5 from './Lab5/index.js';
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import session from "express-session";
import "dotenv/config";
import EnrollmentRoutes from './Kanbas/Enrollments/routes.js';
//import AssignmentRoutes from './Kanbas/Assignments/routes.js';

const app = express()
app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL_A5 || "http://localhost:3000",
        // origin: "*",
    })
);

const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));


app.use(express.json());

Hello(app)
Lab5(app)
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);

app.listen(4000)