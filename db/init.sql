DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    auth0_id VARCHAR,
    username VARCHAR unique not null,
    email VARCHAR unique not null
);

CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    image varchar(2083),
    title TEXT,
    author TEXT, 
    genre TEXT,
    description TEXT
);

INSERT INTO users(auth0_id, username, email)
VALUES(25, 'Terry', 'terry@email.com');

INSERT INTO users(auth0_id, username,  email)
VALUES (30, 'Sam', 'sam@email.com' );

INSERT INTO users(auth0_id, username, email)
VALUES (21, 'Jenny', 'Jenny@email.com');

INSERT INTO users(auth0_id, username, email)
VALUES(50, 'Sally',  'Sally@email.com');


INSERT INTO books (image, title, author, genre, description)
VALUES('https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL.jpg','The Great Gatsby','F. Scott Fitzgerald','Fiction','Nick Carraway in his novel, idolized the riches and glamor of the age, he was uncomfortable with the unrestrained materialism and the lack of morality that went with it, a kind of decadence.');

INSERT INTO books (image, title, author, genre, description)
VALUES('http://ecx.images-amazon.com/images/I/41h9Pz2qeIL.jpg','Alices Adventures in Wonderland','Lewis Carroll','Fiction',' a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature.');

INSERT INTO books (image, title, author, genre, description)
VALUES('http://ecx.images-amazon.com/images/I/51f7ZwJN-NL.jpg','To Kill a Mockingbird','Harper Lee','fiction','As a Southern Gothic novel and a Bildungsroman, the primary themes of To Kill a Mockingbird involve racial injustice and the destruction of innocence. Scholars have noted that Lee also addresses issues of class, courage and compassion, and gender roles in the American Deep South. The story takes place during three years of the Great Depression in the fictional "tired old town" of Maycomb, Alabama. The narrator, six-year-old Scout Finch, lives with her older brother Jem and their widowed father Atticus, a middle-aged lawyer.');

INSERT INTO books (image, title, author, genre, description)
VALUES('https://images-na.ssl-images-amazon.com/images/I/415GrAIKjTL.jpg','Animal Farm','George Orwell','Fiction','Animal Farm is a dystopian novella by George Orwell. Published in England on 17 August 1945, the book reflects events leading up to and during the Stalin era before World War II. Orwell, a democratic socialist and a member of the Independent Labour Party for many years, was a critic of Joseph Stalin and was suspicious of Moscow-directed Stalinism after his experiences with the NKVD during the Spanish Civil War.');

INSERT INTO books (image, title, author, genre, description)
VALUES('https://images-na.ssl-images-amazon.com/images/I/51UJVEZflOL.jpg','My Antonia','Willa Cather','Fiction', 'Cathers soulmate of the plains. Infused with a gracious passion for the land, My Antonia embraces its uncommon subject — the hardscrabble life of the pioneer woman on the prairie — with poetic certitude, rendering a deeply moving portrait of an entire community. Through Jim Burdens endearing, smitten voice, we revisit the remarkable vicissitudes of immigrant life in the Nebraska heartland with all its insistent bonds. Guiding the way are some of literatures most beguiling characters: the Russian brothers plagued by memories of a fateful sleigh ride, Antonias desperately homesick father and self-indulgent mother, and the coy Lena Lingard');

INSERT INTO books (image, title, author, genre, description)
VALUES('https://images-na.ssl-images-amazon.com/images/I/51LqsEjsB-L.jpg','Treasure Island','Robert Louis Stevenson','Fiction','Traditionally considered a coming-of-age story, it is an adventure tale known for its superb atmosphere, character and action, and also a wry commentary on the ambiguity of morality—as seen in Long John Silver—unusual for childrens literature then and now. It is one of the most frequently dramatised of all novels. The influence of Treasure Island on popular perception of pirates is vast, including treasure maps with an X, schooners, the Black Spot, tropical islands, and one-legged seamen with parrots on their shoulders.');
