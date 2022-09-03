BEGIN;

INSERT INTO users (email, username, password, avatar) VALUES 
('cat@gmail.com', 'Catty', '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2', 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=600'),
('memes@gmail.com', 'Memes king', '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2', 'https://i.ytimg.com/vi/o8TaLRPcMLk/maxresdefault.jpg'),
('ex@gmail.com', 'Example', '$2a$10$Q4WJ8gPjyvinnEawSsguju/DK7xUSYPQigBoRDGuY6bKT2IWjjsB2', 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg?auto=compress&cs=tinysrgb&w=600');

INSERT INTO posts (content, userId, image) VALUES 
('Hello i am catty and i the cutest cat you could see', 1, 'https://images.pexels.com/photos/7633653/pexels-photo-7633653.jpeg?auto=compress&cs=tinysrgb&w=600'),
('I am hungry and looking for food!!!', 1, 'https://images.pexels.com/photos/1056467/pexels-photo-1056467.jpeg?auto=compress&cs=tinysrgb&w=600'),
('localhost vs production weeekly meme', 2, 'https://th.bing.com/th/id/R.a1b7b50f272fa8bd006f22c181f7d5c3?rik=DbMh3PXlYIlutg&pid=ImgRaw&r=0');

INSERT INTO comments (content, userId, postId) VALUES 
('hhhhhhhhhhhhhhhhhhh this is so true!!', 3, 3),
('Comeone Catty, join me at lunch', 2, 2),
('Welcome to reddit Catty', 2, 1);

COMMIT;