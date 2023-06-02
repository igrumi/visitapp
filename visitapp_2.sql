-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE gasto (
    id_gasto            INT NOT NULL,
    monto_gasto         INT NOT NULL,
    tipo_gasto 			VARCHAR(65) NOT NULL
);

ALTER TABLE gasto ADD CONSTRAINT gasto_pk PRIMARY KEY ( id_gasto );

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE hogar (
    id_hogar       INT NOT NULL,
    direccion      VARCHAR(60) NOT NULL,
    vivienda       VARCHAR(45) NOT NULL,
    gasto_id_gasto INT NOT NULL
);

ALTER TABLE hogar ADD CONSTRAINT hogar_pk PRIMARY KEY ( id_hogar );

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE integrante (
    rut               INT NOT NULL,
    dv                CHAR(1) NOT NULL,
    nombre            VARCHAR(45) NOT NULL,
    apellido          VARCHAR(45) NOT NULL,
    fecha_nacimiento  DATE NOT NULL,
    estado_civil      VARCHAR(45) NOT NULL,
    celular           BIGINT NOT NULL,
    correo            VARCHAR(45) NOT NULL,
    hogar_id_hogar    INT NOT NULL,
    jefe_hogar        CHAR(1) NOT NULL,
    situacion_laboral VARCHAR(45) NOT NULL,
    ingreso           INT
);

ALTER TABLE integrante ADD CONSTRAINT integrante_pk PRIMARY KEY ( rut );

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE roles (
    id          INT NOT NULL,
    nombre_rol  VARCHAR(45) NOT NULL,
    usuario_rut INT NOT NULL
);

ALTER TABLE roles ADD CONSTRAINT roles_pk PRIMARY KEY ( id );


-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE usuario (
    rut        INT NOT NULL,
    dv         CHAR(1) NOT NULL,
    nombre     VARCHAR(45) NOT NULL,
    apellido   VARCHAR(45) NOT NULL,
    contrasena VARCHAR(45) NOT NULL,
    correo     VARCHAR(45) NOT NULL
);

ALTER TABLE usuario ADD CONSTRAINT usuario_pk PRIMARY KEY ( rut );

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE visita (
    id_visita      INT NOT NULL,
    motivo         VARCHAR(60) NOT NULL,
    usuario_rut    INT NOT NULL,
    hogar_id_hogar INT
);

ALTER TABLE visita ADD CONSTRAINT visita_pk PRIMARY KEY ( id_visita );

ALTER TABLE hogar
    ADD CONSTRAINT hogar_gasto_fk FOREIGN KEY ( gasto_id_gasto )
        REFERENCES gasto ( id_gasto );

ALTER TABLE integrante
    ADD CONSTRAINT integrante_hogar_fk FOREIGN KEY ( hogar_id_hogar )
        REFERENCES hogar ( id_hogar );

ALTER TABLE roles
    ADD CONSTRAINT roles_usuario_fk FOREIGN KEY ( usuario_rut )
        REFERENCES usuario ( rut );

ALTER TABLE visita
    ADD CONSTRAINT visita_hogar_fk FOREIGN KEY ( hogar_id_hogar )
        REFERENCES hogar ( id_hogar );

ALTER TABLE visita
    ADD CONSTRAINT visita_usuario_fk FOREIGN KEY ( usuario_rut )
        REFERENCES usuario ( rut );