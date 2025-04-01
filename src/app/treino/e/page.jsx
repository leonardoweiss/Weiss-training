import List from "@/components/List";

const train = [
    {
      name: 'stiff com halter',
      series: 4,
      link: 'https://www.youtube.com/shorts/I1C3BxSQRb0',
      reps: '8 a 12'
    },
    {
      name: 'mesa flexora',
      series: 4,
      link: 'https://www.youtube.com/shorts/IXg1PQ_5gmw',
      reps: '8 a 12'
    },
    {
      name: 'cadeira flexora',
      series: 4,
      link: 'https://www.youtube.com/shorts/T46yKiz8laY',
      reps: '8 a 12'
    },
    {
      name: 'elevação pélvica',
      series: 4,
      link: 'https://www.youtube.com/shorts/cOvGedlKlD4',
      reps: '8 a 12'
    },
    {
      name: 'elevação lateral',
      series: 4,
      link: 'https://www.youtube.com/shorts/ot9nwSC1JnA',
      reps: '8 a 12'
    },
    {
      name: 'elevação frontal',
      series: 4,
      link: 'https://www.youtube.com/shorts/GqZRmCow0rw',
      reps: '8 a 12'
    },
    {
      name: 'desenvolvimento (na máquina ou com halter)',
      series: 4,
      link: 'https://www.youtube.com/shorts/5I7ogOjvdnc',
      reps: '8 a 12'
    },
    {
      name: 'encolhimento de ombro',
      series: 4,
      link: 'https://www.youtube.com/shorts/x9Im5d1H-Xw',
      reps: '8 a 12'
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