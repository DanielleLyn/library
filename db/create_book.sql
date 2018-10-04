/*INSERT INTO Statements add data to database.*/
INSERT INTO books (image, title, author, genre, description)
 VALUES (${image}, ${title}, ${author}, ${genre}, ${description});
/*SELECT Statements return data.*/
SELECT * FROM books;
