import List from "@/components/List";

const train =  [
    {
      name: 'rosca alternada',
      series: 3,
      link: 'https://www.youtube.com/shorts/xXp3mV3OOZo',
      reps: '8 a 12'
    },
    {
      name: 'rosca scott',
      series: 4,
      link: 'https://www.youtube.com/shorts/QkNciumGy14',
      reps: '8 a 12'
    },
    {
      name: 'rosca inclinado',
      series: 3,
      link: 'https://www.youtube.com/shorts/a1NPJFmCJ5o',
      reps: '8 a 12'
    },
    {
      name: 'rosca martelo',
      series: 3,
      link: 'https://www.youtube.com/shorts/0rRpv6o140o',
      reps: '8 a 12'
    },
    {
      name: 'tríceps corda',
      series: 4,
      link: 'https://www.youtube.com/shorts/-QGC1cL6ETE',
      reps: '8 a 12'
    },
    {
      name: 'tríceps testa (deitado ou na polia)',
      series: 4,
      link: 'https://www.youtube.com/shorts/Cd0-tP9utgM',
      reps: '8 a 12'
    },
    {
      name: 'supino fechado',
      series: 3,
      link: 'https://www.youtube.com/shorts/j7JOK6MqoN4',
      reps: '8 a 12'
    },
    {
      name: 'rosca inversa',
      series: 4,
      link: 'https://www.youtube.com/shorts/2uNYtzOR3aI',
      reps: '8 a 12'
    },
]

export default function Arms() {
    return(
        <main>
            <h1>Treino de <strong>Braços</strong></h1>
            <List exercises={train} />
        </main>
    )
}