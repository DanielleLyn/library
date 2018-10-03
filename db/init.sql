-- DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS books

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    image VARCHAR(2083),
    title TEXT,
    author TEXT, 
    genre TEXT,
    description TEXT,
);


INSERT INTO books (image, title, author, genre, description)
VALUES('https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL.jpg','The Great Gatsby','F. Scott Fitzgerald','Fiction','The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia. Although Fitzgerald, like Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence.')

INSERT INTO books (image, title, author, genre, description)
VALUES('http://ecx.images-amazon.com/images/I/41h9Pz2qeIL.jpg','Alices Adventures in Wonderland','Lewis Carroll','Fiction','In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature. Countless scholars have tried to define the charm of the Alice books–with those wonderfully eccentric characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, the Mad Hatter et al.–by proclaiming that they really comprise a satire on language, a political allegory, a parody of Victorian children’s literature, even a reflection of contemporary ecclesiastical history. Perhaps, as Dodgson might have said, Alice is no more than a dream, a fairy tale about the trials and tribulations of growing up–or down, or all turned round–as seen through the expert eyes of a child.')

INSERT INTO books (image, title, author, genre, description)
VALUES('','','','','')

INSERT INTO books (image, title, author, genre, description)
VALUES('','','','','')

INSERT INTO books (image, title, author, genre, description)
VALUES('','','','','')

INSERT INTO books (image, title, author, genre, description)
VALUES('','','','','')
