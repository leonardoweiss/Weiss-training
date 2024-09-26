import List from "@/components/List";

const train =  [
  {
    name: 'Agachamento com peso corporal',
    series: '2',
    reps: '30',
    interval: '20s'
  },
  {
    name: 'Abdução de pernas em pé no Cross',
    series: '3',
    reps: '20',
    interval: '0s',
  },
  {
    name: 'Agachamento sumô com halteres',
    series: '4',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Agachamento alternado no smith',
    series: '3',
    reps: '12',
    interval: '30s'
  },
  {
    name: 'Elevação de quadril com barra',
    series: '3',
    reps: '20',
    interval: '0'
  },
  {
    name: 'Stiff com barra',
    series: '3',
    reps: '12/12/10',
    interval: '40s'
  },
  {
    name: 'Leg press 80',
    series: '3',
    reps: '20/20/12',
    interval: '50s'
  },
  {
    name: 'cadeira flexora',
    series: '4',
    reps: '12/12/10 + 1 drop-set',
    interval: '30s'
  },
  {
    name: 'Panturrilha sentada',
    series: '3',
    reps: '30',
    interval: '20s'
  },
]

export default function Arms() {
    return(
        <main>
            <h1>Treino de <strong>Pernas Completo</strong></h1>
            <List exercises={train} />
        </main>
    )
}