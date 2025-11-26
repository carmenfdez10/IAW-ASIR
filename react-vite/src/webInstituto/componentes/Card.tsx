import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import estilos from './card.module.css';
interface parametros{
    colorear:string;
    colorear2:string;
    titulo:string;
    imagen:string;
}

function BasicExample({colorear,colorear2,titulo,imagen}:parametros) {
  return (
    <Card
    className={estilos.card}
    style={{ backgroundImage: `url(${imagen})`, color: colorear }}
  >
    <div className={estilos.overlay}>
      <Card.Body>
        <Card.Title style={{ color: colorear2 }}>{titulo}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst, ultricies placerat senectus volutpat orci luctus congue. Vitae eu quam potenti cursus lobortis metus integer
        </Card.Text>
        <Button variant="light">Visitar sitio</Button>
      </Card.Body>
    </div>
  </Card>
  );
}

export default BasicExample;