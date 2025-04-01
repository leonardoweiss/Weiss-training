import List from "@/components/List";

const train = [
    {
      name: 'agachamento livre',
      series: 4,
      link: 'https://www.youtube.com/shorts/vwV4izNPOh4',
      reps: '8 a 12'
    },
    {
      name: 'legpress 45°',
      series: 4,
      link: 'https://www.youtube.com/shorts/jeAN2C3Mqdw',
      reps: '8 a 12'
    },
    {
      name: 'cadeira extensora',
      series: 4,
      link: 'https://www.youtube.com/shorts/PzIfB9MiiX8',
      reps: '8 a 12'
    },
    {
      name: 'avanço com passada',
      series: 3,
      link: 'https://www.youtube.com/shorts/UORBklZn76k',
      reps: '8 a 12'
    },
    {
      name: 'agachamento sumô',
      series: 4,
      link: 'https://www.youtube.com/shorts/sWumxKVTTrM',
      reps: '8 a 12'
    },
    {
      name: 'panturrilha sentada',
      series: 4,
      link: 'https://www.youtube.com/shorts/91bIKBrR4Wo',
      reps: '8 a 12'
    },
    {
      name: 'panturrilha no hack',
      series: 4,
      link: 'https://www.youtube.com/shorts/OUCgus8KWas',
      reps: '8 a 12'
    },
]

export default function Legs() {
    return(
        <main>
            <h1>Treino de <strong>Quadríceps</strong></h1>
            <List exercises={train} />
        </main>
    )
}