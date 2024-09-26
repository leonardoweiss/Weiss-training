import List from "@/components/List";

const train =  [
    {
      name: 'rosca alternada',
      series: 3,
      link: 'https://www.youtube.com/shorts/xXp3mV3OOZo'
    },
    {
      name: 'rosca scott',
      series: 4,
      link: 'https://www.youtube.com/shorts/QkNciumGy14'
    },
    {
      name: 'rosca inclinado',
      series: 3,
      link: 'https://www.youtube.com/shorts/a1NPJFmCJ5o'
    },
    {
      name: 'rosca martelo',
      series: 3,
      link: 'https://www.youtube.com/shorts/0rRpv6o140o'
    },
    {
      name: 'tríceps corda',
      series: 4,
      link: 'https://www.youtube.com/shorts/-QGC1cL6ETE'
    },
    {
      name: 'tríceps testa (deitado ou na polia)',
      series: 4,
      link: 'https://www.youtube.com/shorts/Cd0-tP9utgM'
    },
    {
      name: 'supino fechado',
      series: 3,
      link: 'https://www.youtube.com/shorts/j7JOK6MqoN4'
    },
    {
      name: 'rosca inversa',
      series: 4,
      link: 'https://www.youtube.com/shorts/2uNYtzOR3aI'
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