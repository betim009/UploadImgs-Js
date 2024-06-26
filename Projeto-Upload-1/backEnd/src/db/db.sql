CREATE DATABASE image_upload;

USE image_upload;

CREATE TABLE
    images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        image LONGBLOB NOT NULL,
        name VARCHAR(255) NOT NULL,
        descricao TEXT,
        preco DECIMAL(10, 2)
    );