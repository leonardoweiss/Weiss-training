import List from "@/components/List"

const train = [
  {
    name: 'Flexão de braço',
    series: '3',
    reps: '15',
    interval: '30s'
  },
  {
    name: 'Supino reto com halteres',
    series: '3',
    reps: '15/10/8',
    interval: '0'
  },
  {
    name: 'Crucifixo inclinado',
    series: '3',
    reps: '12',
    interval: '0'
  },
  {
    name: 'Desenvolvimento com halteres',
    series: '3',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Elevação lateral',
    series: '3',
    reps: '10',
    interval: '0'
  },
  {
    name: 'Elevação frontal unilateral',
    series: '3',
    reps: '15',
    interval: '30s'
  },
  {
    name: 'Tríceps francês com corda',
    series: '3',
    reps: '12',
    interval: '0'
  },
  {
    name: 'Mergulhos em banco',
    series: '3',
    reps: 'Até a exaustão',
    interval: '30s'
  },
  {
    name: 'Tríceps francês com corda',
    series: '5',
    reps: '10/10/drop-set/10/drop-set',
    interval: '30s'
  },
  {
    name: 'Abdominal passando halter entre as pernas',
    series: '3',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Abdominal total',
    series: '3',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Abdominal prancha',
    series: '3',
    reps: '1 minuto',
    interval: '40s'
  },
]

export default function Back() {
    return(
        <main>
            <h1>Treino de <strong>Superiores</strong></h1>
            <List exercises={train}/>
        </main>
    )
}