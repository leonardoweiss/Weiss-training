import List from "@/components/List"

const train = [
    {
      name: 'supino inclinado com halter',
      series: 4,
      link: 'https://www.youtube.com/shorts/ZaNyRjpoki8',
      reps: '8 a 12'
    },
    {
      name: 'supino reto com halter',
      series: 4,
      link: 'https://www.youtube.com/shorts/hlV6f0kHmeo',
      reps: '8 a 12'
    },
    {
      name: 'voador (peck deck)',
      series: 4,
      link: 'https://www.youtube.com/shorts/MENdoLpyj7c',
      reps: '8 a 12'
    },
    {
      name: 'crossover polia alta',
      series: 4,
      link: 'https://www.youtube.com/shorts/55nyV_aosNk',
      reps: '8 a 12'
    },
    {
      name: 'crossover polia baixa',
      series: 3,
      link: 'https://www.youtube.com/shorts/Od9914tc8sg',
      reps: '8 a 12'
    },
    {
      name: 'flexão',
      series: 3,
      link: 'https://www.youtube.com/shorts/qqECekG4jMo',
      reps: '8 a 12'
    },
]

export default function Chest() {
    return(
        <main>
            <h1>Treino de <strong>Peito</strong></h1>
            <List exercises={train}/>
        </main>
    )
}