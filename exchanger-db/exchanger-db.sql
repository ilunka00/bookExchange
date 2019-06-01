CREATE TABLE public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    email character varying(512) COLLATE pg_catalog."default" NOT NULL,
    password character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(14) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    surname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    is_active boolean NOT NULL,
    CONSTRAINT pk_user_id PRIMARY KEY (id),
    CONSTRAINT phone_number UNIQUE (phone_number),
    CONSTRAINT uk_email UNIQUE (email)

)

CREATE TABLE public.offer
(
    id integer NOT NULL DEFAULT nextval('offer_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    author character varying(50) COLLATE pg_catalog."default" DEFAULT 'unknown'::character varying,
    description character varying(500) COLLATE pg_catalog."default" DEFAULT 'not provided'::character varying,
    CONSTRAINT pk_offer_id PRIMARY KEY (id)
)

CREATE TABLE "announce_board"
(
	"id" SERIAL NOT NULL,
	"user_id" INTEGER NOT NULL,
	"offer_id" INTEGER NOT NULL,
	"is_active" BOOLEAN,

    CONSTRAINT pk_announce_board_id PRIMARY KEY ("id"),
	CONSTRAINT fk_user_id FOREIGN KEY("user_id") 
	REFERENCES "user"("id"),
	CONSTRAINT fk_book_id FOREIGN KEY("offer_id") 
	REFERENCES "offer"("id")
 	);