const database=DBConnect=>{
    const addRepo=repo=>{
        return new Promise((resolve,reject)=>{
            const sql = `INSERT INTO github_repos
            (github_id,name, html_url, description, updated_at)
             VALUES (
               ${DBConnect.escape(repo.github_id)},
               ${DBConnect.escape(repo.name)},
               ${DBConnect.escape(repo.html_url)},
               ${DBConnect.escape(repo.description)},
               ${DBConnect.escape(repo.updated_at)}
             )
             ON DUPLICATE KEY UPDATE
                html_url = ${DBConnect.escape(repo.html_url)},
                description = ${DBConnect.escape(repo.description)},
                updated_at = ${DBConnect.escape(repo.updated_at)}`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        })
    }
    const addGitHubMeta=user=>{
        return new Promise((resolve,reject)=>{
            const sql = `INSERT INTO github_meta
            (github_id, avatar_url, name, company, blog, location, email, bio)
             VALUES (
                ${DBConnect.escape(user.github_id)},
                ${DBConnect.escape(user.avatar_url)},
                ${DBConnect.escape(user.name)},
                ${DBConnect.escape(user.company)},
                ${DBConnect.escape(user.blog)},
                ${DBConnect.escape(user.location)},
                ${DBConnect.escape(user.email)},
                ${DBConnect.escape(user.bio)}
             )`;
             DBConnect.query(sql, function (err, result) {
                 if (err) {
                     reject(err)
                 };
                 resolve(result);
            });
        })
    }
    const addDeveloper=user=>{
        return new Promise((resolve,reject)=>{
            const sql = `INSERT INTO developer
            (github_id, linkedin_id, codechef_id, hackerrank_id, twitter_id, medium_id)
             VALUES (
                 ${DBConnect.escape(user.github_id)},
                 ${DBConnect.escape(user.linkedin_id)},
                 ${DBConnect.escape(user.codechef_id)},
                 ${DBConnect.escape(user.hackerrank_id)},
                 ${DBConnect.escape(user.twitter_id)},
                 ${DBConnect.escape(user.medium_id)}
             )`;
             DBConnect.query(sql, function (err, result) {
                 if (err) {
                     reject(err)
                 };
                 resolve(result);
            });
        })
    }
    const getAllDevelopers=()=>{
        return new Promise((resolve,reject)=>{
            const sql = `SELECT github_id,avatar_url  FROM github_meta`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        })
    }
    const getAllRepos=(github_id)=>{
        return new Promise((resolve,reject)=>{
            const sql = `SELECT name, html_url, description, updated_at
                FROM github_repos
                WHERE github_id = ${DBConnect.escape(github_id)} ORDER BY updated_at DESC`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                resolve(result);
           });
        })
    }
    const getMeta=(github_id)=>{
        return new Promise((resolve,reject)=>{
            const sql = `SELECT avatar_url, name, company, blog, location, email, bio
                FROM github_meta
                WHERE github_id = ${DBConnect.escape(github_id)}`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                if(result.length>0){
                    resolve(result[0]);
                }else{
                    reject("no user found");
                }
           });
        })
    }
    const getDeveloper=(github_id)=>{
        return new Promise((resolve,reject)=>{
            const sql = `SELECT github_id,codechef_id,hackerrank_id,twitter_id,medium_id
                FROM developer WHERE github_id=${DBConnect.escape(github_id)}`;
            DBConnect.query(sql, function (err, result) {
                if (err) {
                    reject(err)
                };
                if(result.length>0){
                    resolve(result[0]);
                }else{
                    reject("no user found");
                }
           });
        })
    }

    return {
        addRepo,
        addGitHubMeta,
        addDeveloper,
        getAllDevelopers,
        getAllRepos,
        getMeta,
        getDeveloper
    }
}

module.exports=database;