import List from "@/components/List"

const train = [
    {
      name: 'Deadlift Sumô',
      series: 4,
      link: 'https://www.youtube.com/shorts/yp14vDyCUJA',
      reps: '8 a 12'
    },
    {
      name: 'puxada fechada',
      series: 4,
      link: 'https://www.youtube.com/shorts/ySLFHxmJ_Sc',
      reps: '8 a 12'
    },
    {
      name: 'puxada alta em pé (pulldown)',
      series: 4,
      link: 'https://www.youtube.com/shorts/bON_FlYHh8c',
      reps: '8 a 12'
    },
    {
      name: 'remada curvada (pegada supinada)',
      series: 4,
      link: 'https://www.youtube.com/shorts/w7j9nPqxTH4',
      reps: '8 a 12'
    },
    {
      name: 'remada unilateral com halter',
      series: 3,
      link: 'https://www.youtube.com/shorts/Kp47zWRQ-uk',
      reps: '8 a 12'
    },
    {
      name: 'remada baixa neutra',
      series: 3,
      link: 'https://www.youtube.com/shorts/C9N2sCdAWJ8',
      reps: '8 a 12'
    },
    {
      name: 'remada cavalinho',
      series: 4,
      link: 'https://www.youtube.com/shorts/fF3Ruq84nk8',
      reps: '8 a 12'
    },
]

export default function Back() {
    return(
        <main>
            <h1>Treino de <strong>Costas</strong></h1>
            <List exercises={train}/>
        </main>
    )
}