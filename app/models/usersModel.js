let db = require("../../system/Database/database");
var con = db.con;
var apiConfig = db.apiConfig;

module.exports.getAll = function (req, res) {
  var { status } = req.params;
  var { pageno } = req.query;

  if (pageno == null || pageno == 0) {
    pageno = 1;
  }

  var maxperPage = apiConfig.maxperpage;
  var totalUsers = countUsers(status);
  var offset = (pageno - 1) * maxperPage;
  var total_page = totalUsers / maxperPage;

  var sql = `SELECT
    tbl_users.id as id,
    tbl_users.fullname as fullname,
    tbl_users.username as username,
    tbl_users.roll as roll,
    tbl_users.password as password,
    (SELECT name FROM tbl_users_roll WHERE id=tbl_users.roll) as roll_name,
    tbl_users.email as email,
    tbl_users.ip as ip,
    tbl_users.secret_key as secret_key,
    tbl_users.created_at as created_at,
    tbl_users.updated_at as updated_at,
    tbl_users.status as status
    FROM tbl_users
    WHERE tbl_users.status=${status}
    ORDER BY tbl_users.created_at DESC
    LIMIT ${offset}, ${maxperPage}`;

  (async () => {
    try {
      return await con.query(sql, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
          res.json(results);
        } else {
          res.json({ status: false, msg: "Not found: " + { pageno } });
        }
      });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
};

function countUsers(status) {
  const sql = `SELECT count(*) FROM tbl_users WHERE status = ${status}`;

  return con.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      return results.length;
    } else {
      res.send("Not found" + error);
    }
  });
}
