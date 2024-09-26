import List from "@/components/List";

const train = [
  {
    name: 'Agachamento com Peso Corporal',
    series: '2',
    reps: '30',
    interval: '0'
  },
  {
    name: 'Agachamento sumô com peso Corporal',
    series: '2',
    reps: '30',
    interval: '20s'
  },
  {
    name: 'Extensão de Glúteo no Croos',
    series: '3',
    reps: '20/12/12',
    interval: '0'
  },
  {
    name: 'Cadeira Abdutora',
    series: '3',
    reps: '40',
    interval: '30s'
  },
  {
    name: 'Elevação de Quadril com Carga',
    series: '3',
    reps: '25',
    interval: '30s'
  },
  {
    name: 'Passada com halteres',
    series: '3',
    reps: '20 passadas',
    interval: '40s'
  },
  {
    name: 'Agachamento sumô no Smith',
    series: '4',
    reps: '15/12/8/8',
    interval: '40s'
  },
  {
    name: 'Mesa Flexora',
    series: '5',
    reps: '20/12/10/8/drop-set',
    interval: '0'
  },
  {
    name: 'Stiff com barra',
    series: '4',
    reps: '10',
    interval: '30s'
  },
  {
    name: 'cadeira extensora unilateral',
    series: '5',
    reps: '15/15/15/10/drop-set',
    interval: '0'
  },
]

export default function Sholders() {
    return(
        <main>
            <h1>Treino de <strong>Posterior e Ombro</strong></h1>
            <List exercises={train} />
        </main>
    )
}