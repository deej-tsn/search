CREATE DATABASE searching;
use searching;

CREATE TABLE USERS (
	user_id SERIAL,
    username varchar(50) NOT NULL unique,
    email varchar(50) NOT NULL unique,
    first_name varchar(50) NOT NULL,
    second_name VARCHAR(50) NOT NULL,
    passhash text NOT NULL
);

CREATE TABLE POSTS (
	post_id SERIAL,
    title VARCHAR(50) NOT NULL,
    image text NOT NULL,
    body text NOT NULL,
    author BIGINT UNSIGNED NOT NULL,
	created_on DATETIME DEFAULT now(),
    foreign key (author) references USERS(user_id)
);

CREATE TABLE TAGS (
	tag_id SERIAL,
    tag_name VARCHAR(50)
);

CREATE TABLE POST_TAG (
	post_tag_id SERIAL,
    post_id BIGINT UNSIGNED ,
    tag_id BIGINT UNSIGNED,
    foreign key (post_id) references POSTS(post_id),
    foreign key (tag_id) references TAGS(tag_id)
);

CREATE TABLE POST_LIKE (
	post_like_id serial,
    post_id BIGINT UNSIGNED,
    user_id BIGINT UNSIGNED,
    foreign key (post_id) references posts(post_id),
    foreign key (user_id) references users(user_id)
);
