'use client';

import { Card } from 'react-bootstrap'; 
import estilos from './(componentes)/card.module.css';

export default function Page() {
    return (
        <div className={estilos.cards}>
            <Card className={estilos.card}>
                <div className={estilos.imageContainer}></div>
                <Card.Body className={estilos.cardContent}>
                    <Card.Title>IES Cura Valera</Card.Title>
                    <Card.Text>
                        Este texto aparecerá en la parte inferior con fondo blanco.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={estilos.card}>
            <div className={estilos.imageContainer}></div>
            <Card.Body className={estilos.cardContent}>
                <Card.Title>Título de la Card</Card.Title>
                <Card.Text>
                    Este texto aparecerá en la parte inferior con fondo blanco.
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
}