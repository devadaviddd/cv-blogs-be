USE backend-db;
CREATE TABLE Post (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image VARCHAR(255) NOT NULL,
  title TEXT(255) NOT NULL,
  description TEXT(255) NOT NULL
);

INSERT INTO Post (image, title, description)
VALUES ('https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg', 'Tech Blog', 'This is a blog about technology you should read it more to know more!');
INSERT INTO Post (image, title, description)
VALUES ('https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg', 'Tech Blog', 'This is a blog about technology you should read it more to know more!');
INSERT INTO Post (image, title, description)
VALUES ('https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg', 'Tech Blog', 'This is a blog about technology you should read it more to know more!');
INSERT INTO Post (image, title, description)
VALUES ('https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg', 'Tech Blog', 'This is a blog about technology you should read it more to know more!');
INSERT INTO Post (image, title, description)
VALUES ('https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg', 'Tech Blog', 'This is a blog about technology you should read it more to know more!');