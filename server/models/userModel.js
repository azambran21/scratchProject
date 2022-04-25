const { builtinModules } = require('module');
const { Pool } = require('pg');

const PG_URI = 'postgres://gjnfzjye:KRe901CqUiVOuxCS1zOSMHoA9nsJAV4G@isilo.db.elephantsql.com/gjnfzjye';

const pool = new Pool({
    connectionString: PG_URI,
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};