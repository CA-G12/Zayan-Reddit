BEGIN;

drop table if exists users, posts, comments cascade;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT DEFAULT 'https://th.bing.com/th/id/OIP.4gcGG1F0z6LjVlJjYWGGcgHaHa?pid=ImgDet&rs=1'
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL, 
    image TEXT, 
    timeAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL,
    CONSTRAINT FKuserId FOREIGN KEY (userId) REFERENCES users(id) on delete cascade
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY, 
    content TEXT NOT NULL, 
    timeAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    userId INT NOT NULL, 
    postId INT NOT NULL,
    CONSTRAINT FKuserId FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT FKpostId FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE
);
COMMIT;