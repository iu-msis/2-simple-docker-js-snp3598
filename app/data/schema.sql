USE msis;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    commentText TEXT NOT NULL
);

INSERT INTO Comments (id, commentText) VALUES
("1", "I"),
("2", "love"),
("3", "DS"),
("4", "!");
