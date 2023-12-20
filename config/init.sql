-- CREATE TABLE pokemons
CREATE TABLE pokemons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    hp INTEGER,
    cp INTEGER,
    picture VARCHAR(255),
    types VARCHAR(255)[] DEFAULT ARRAY['Feu']::VARCHAR(255)[],
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ADD 4 POKEMONS
INSERT INTO pokemons (name, hp, cp, picture, types, created)
VALUES
    ('Bulbizarre', 25, 5, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png', '{"Plante", "Poison"}', '2023-12-17T12:34:56Z'),
    ('Salamèche', 28, 6, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png', '{"Feu"}', '2023-12-17T12:34:56Z'),
    ('Carapuce', 21, 4, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png', '{"Eau"}', '2023-12-17T12:34:56Z'),
    ('Aspicot', 16, 2, 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png', '{"Insecte", "Poison"}', '2023-12-17T12:34:56Z');
