import List from "@/components/List";

const train = [
  {
    name: 'Remada média',
    series: '4',
    reps: '20/15/10/drop-set',
    interval: '0'
  },
  {
    name: 'Pulley frontal com barra',
    series: '3',
    reps: '12/10/8',
    interval: '30s'
  },
  {
    name: 'Remada curvada cross com triângulo',
    series: '4',
    reps: '20/12/10/drop-set',
    interval: '0'
  },
  {
    name: 'Crucifixo inverso com halteres',
    series: '3',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Pulldown com barra',
    series: '4',
    reps: '15/10/8/drop-set',
    interval: '30s'
  },
  {
    name: 'Rosca direta cross',
    series: '3',
    reps: '20/15/10',
    interval: '0'
  },
  {
    name: 'Rosca martelo com corda',
    series: '3',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Tríceps testa',
    series: '3',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Abdominal alternado',
    series: '3',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Abdominal bicicleta',
    series: '3',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Elevação de pernas',
    series: '3',
    reps: '20',
    interval: '30s'
  },
  {
    name: 'Abdominal prancha invertida',
    series: '3',
    reps: '30 segundos',
    interval: '30s'
  },
]

export default function Legs() {
    return(
        <main>
            <h1>Treino de <strong>Costas e braços</strong></h1>
            <List exercises={train} />
        </main>
    )
}