CREATE TABLE urls (
  Id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Long_url VARCHAR(255) NOT NULL,
  Short_url VARCHAR(255) NOT NULL,
  Created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  Updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  Id INTEGER AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  UNIQUE (Email)
);

-- CREATE TABLE clicks (
--   Id INTEGER AUTO_INCREMENT PRIMARY KEY,
--   Short_url_id VARCHAR(255) NOT NULL,
--   User_id INTEGER NOT NULL,
--   FOREIGN KEY (Short_url_id) REFERENCES urls (Short_url_id),
--   FOREIGN KEY (User_id) REFERENCES users (Id)
-- );