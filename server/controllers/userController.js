const { ModuleFilenameHelpers } = require('webpack');
const db = require('../models/userModel');

const userController = {
    getUser(req, res, next) {
        //when we add the login functionality, this will actually query the login table and then redirect to the user table with the user information by using the user id

        const sqlString = `SELECT * FROM 'users`;

        db.query(sqlString)
            .then(data => {
                res.locals.user = data.rows;
                return next();
            })
            .catch(err => {
                return next({
                    log: 'An error occurred in getUser middleware',
                    status: 400,
                    message: { err: 'An error occurred in getUser middleware' },
                })
            })
    },

    getNutrition(req, res, next) {
        const sqlString = `SELECT * FROM 'foods`;

        db.query(sqlString)
            .then(data => {
                res.locals.user = data.rows;
                return next();
            })
            .catch(err => {
                return next({
                    log: 'An error occurred in getNutrition middleware',
                    status: 400,
                    message: { err: 'An error occurred in getNutrition middleware' },
                })
            })
    },


    addUser(req, res, next) {
        const { username, password, firstName, lastName, height, weight, food_id } = req.body;
        const command = `INSERT INTO users (username, password, firstName, lastName, height, weight)
        VALUES ($1,$2,$3,$4$,5,$6)
        RETURNING *`;
        const foodCommand = ``;

        const params = [
            username,
            password,
            firstName,
            lastName,
            height,
            weight,
            food_id
        ]

    },

    addFood(req, res, next) {
        const { calories, fat, protein, carbs } = req.body;
        const command = `INSERT INTO food (calories, fat, protein, carbs)
        VALUES ($1,$2,$3,$4)
        RETURNING *`;
        const userCommand = ``;

        const params = [
            calories,
            fat,
            protein,
            carbs,
            user_id
        ]

    }


}

module.exports = userController;