var exports = module.exports = {};

const { Pool } = require('pg');

exports.ConnectionPostgreSQL = function()
{
    const pg_opt = {
        user:'mopicadmin',
        host:'mopicdevsqldb-dy.postgres.database.azure.com',
        database:'tutorialdb',
        password:'popup3d*',
        port:5432,
        ssl:true
    };
    const pg_pool = new Pool(pg_opt);
    pg_pool.connect(err => {
        if (err)
        {
            console.log(err);
        }
        else
        {
            console.log("db connection success");

            var query_str = "SELECT * FROM customers";
            pg_pool.query(query_str, (err, res) => {
                if (err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(res.rows);
                }
            })
        }
    });
}