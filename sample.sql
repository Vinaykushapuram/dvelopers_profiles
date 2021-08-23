
CREATE TABLE IF NOT EXISTS github_repos (
    github_id VARCHAR(255) ,
    name VARCHAR(255) ,
    html_url VARCHAR(255) ,
    description TEXT ,
    updated_at DATETIME ,
    PRIMARY KEY (github_id,name)
);

CREATE TABLE IF NOT EXISTS developer (
    github_id VARCHAR(255) ,
    linkedin_id VARCHAR(255),
    codechef_id VARCHAR(255),
    hackerrank_id VARCHAR(255),
    twitter_id VARCHAR(255),
    medium_id VARCHAR(255),
    PRIMARY KEY (github_id)
);

CREATE TABLE IF NOT EXISTS github_meta (
    github_id VARCHAR(255) ,
    avatar_url VARCHAR(255) ,
    name VARCHAR(255) ,
    company VARCHAR(255) ,
    blog VARCHAR(255) ,
    location VARCHAR(255) ,
    email VARCHAR(255) ,
    bio VARCHAR(255) ,
    PRIMARY KEY (github_id)
);
