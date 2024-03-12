import List from "@/components/List"

const train = [
    {
      name: 'puxada frente (pulley)',
      series: 4,
      link: 'https://www.youtube.com/shorts/yp14vDyCUJA'
    },
    {
      name: 'puxada fechada',
      series: 4,
      link: 'https://www.youtube.com/shorts/ySLFHxmJ_Sc'
    },
    {
      name: 'puxada alta em pé (pulldown)',
      series: 4,
      link: 'https://www.youtube.com/shorts/bON_FlYHh8c'
    },
    {
      name: 'remada curvada (pegada supinada)',
      series: 4,
      link: 'https://www.youtube.com/shorts/w7j9nPqxTH4'
    },
    {
      name: 'remada unilateral com halter',
      series: 3,
      link: 'https://www.youtube.com/shorts/Kp47zWRQ-uk'
    },
    {
      name: 'remada baixa neutra',
      series: 3,
      link: 'https://www.youtube.com/shorts/C9N2sCdAWJ8'
    },
    {
      name: 'remada cavalinho',
      series: 4,
      link: 'https://www.youtube.com/shorts/fF3Ruq84nk8'
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