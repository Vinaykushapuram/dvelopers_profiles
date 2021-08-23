// // fetch codeforces rating of user
// const updateCodeforcesRating=(github_id,codeforces_id)=>{
    
// }

const fetchCodeforcesMaxRating = codeforces_id => {
    return new Promise((resolve,reject)=>{
        fetch(`https://codeforces.com/api/user.info?handles=${codeforces_id}`)
            .then(res=>{
                if(res.status==="OK"){
                    resolve({rating:res.result[0].rating,maxRating:res.result[0].maxRating});
                }
                else{
                    reject("error");
                }
            })
            .catch(err=>err);
    });
}

const updateRepos= github_id=>{
    return new Promise((resolve,reject)=>{
        fetch(`https://api.github.com/users/${github_id}/repos`)
            .then(repos=>repos.json())
            .then(repos=>{
                repos.forEach((repo) =>  {
                    DB.addRepo({...repo,github_id:req.params.login}).then().catch(err=>console.log(err));
                });
                resolve("done");
            })
            .catch(err=>err);
    });
}