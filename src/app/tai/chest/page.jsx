import List from "@/components/List"

const train = [
  {
    name: 'Cadeira Extensora',
    series: '2',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Abdução em pé com band',
    series: '2',
    reps: '30',
    interval: '20s'
  },
  {
    name: 'Agachamento livre com barra',
    series: '5',
    reps: '15/15/10/10/10',
    interval: '50s'
  },
  {
    name: 'Leg Press 45',
    series: '4',
    reps: '20',
    interval: '0'
  },
  {
    name: 'Agachamento Búlgaro com Halteres',
    series: '4',
    reps: '8',
    interval: '40s'
  },
  {
    name: 'Cadeira extensora',
    series: '4',
    reps: '20/15/10/10',
    interval: '40s'
  },
  {
    name: 'Agachamneto Hack',
    series: '3',
    reps: '15',
    interval: '30s'
  },
  {
    name: 'Cadeira adutora',
    series: '3',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Panturrilha em pé',
    series: '3',
    reps: '30',
    interval: '30s'
  },
]

export default function Chest() {
    return(
        <main>
            <h1>Treino de <strong>Quadríceps</strong></h1>
            <List exercises={train}/>
        </main>
    )
}