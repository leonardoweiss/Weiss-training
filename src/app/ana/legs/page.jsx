import List from "@/components/List";

const train = [
    {
      name: 'agachamento livre',
      series: 4,
      link: 'https://www.youtube.com/shorts/vwV4izNPOh4'
    },
    {
      name: 'legpress 45°',
      series: 4,
      link: 'https://www.youtube.com/shorts/jeAN2C3Mqdw'
    },
    {
      name: 'cadeira extensora',
      series: 4,
      link: 'https://www.youtube.com/shorts/PzIfB9MiiX8'
    },
    {
      name: 'avanço com passada',
      series: 3,
      link: 'https://www.youtube.com/shorts/UORBklZn76k'
    },
    {
      name: 'agachamento sumô',
      series: 4,
      link: 'https://www.youtube.com/shorts/sWumxKVTTrM'
    },
    {
      name: 'panturrilha sentada',
      series: 4,
      link: 'https://www.youtube.com/shorts/91bIKBrR4Wo'
    },
    {
      name: 'panturrilha no hack',
      series: 4,
      link: 'https://www.youtube.com/shorts/OUCgus8KWas'
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